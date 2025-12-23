import testData from "../data/mockData.js";

// ------------------------------------
// CONFIG
// ------------------------------------
const REVALIDATE_MS = 30 * 1000; // refresh every 30s
const MAX_FALLBACK_MS = 2 * 60 * 1000; // 2 minutes safety window

// ------------------------------------
// IN-MEMORY CACHE
// ------------------------------------
const cache = {
  data: null,
  lastFetch: 0,
  fetching: false,
};

// ------------------------------------
// EXTERNAL FETCH
// ------------------------------------
async function fetchExternalMonsters(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch monsters from ${url}`);
  return res.json();
}

// ------------------------------------
// MAIN BACKEND LOGIC
// ------------------------------------
export async function getAllSaintsMerged() {
  const now = Date.now();

  // 1️⃣ Serve cached data if still valid
  if (cache.data && now - cache.lastFetch < REVALIDATE_MS) {
    return cache.data;
  }

  // 2️⃣ Prevent parallel external fetches
  if (cache.fetching) {
    return cache.data ?? testData;
  }

  cache.fetching = true;

  try {
    const includeLocal = true;
    const includeExternal1 = false;
    const includeExternal2 = false;

    let localMonsters = includeLocal ? testData : [];
    let externalMonsters = [];

    // 3️⃣ External APIs (rate-safe)
    if (includeExternal1) {
      const data1 = await fetchExternalMonsters(
        "https://mhw-db.com/monsters"
      );
      externalMonsters.push(...data1);
    }

    if (includeExternal2) {
      const data2 = await fetchExternalMonsters(
        "https://wilds.mhdb.io/en/monsters"
      );
      externalMonsters.push(...data2);
    }

    // 4️⃣ Merge + unique IDs
    const allMonsters = [...externalMonsters, ...localMonsters];
    const usedIds = new Set();

    const withUniqueIds = allMonsters.map((m, idx) => {
      let newId = m.id != null ? Number(m.id) : idx;
      while (usedIds.has(newId)) newId++;
      usedIds.add(newId);
      return { ...m, id: newId };
    });

    // 5️⃣ Deduplicate by name
    const seenNames = new Set();
    const finalData = withUniqueIds.filter((m) => {
      if (seenNames.has(m.name)) return false;
      seenNames.add(m.name);
      return true;
    });

    // 6️⃣ Cache result
    cache.data = finalData;
    cache.lastFetch = now;

    return finalData;
  } catch (err) {
    console.error("External fetch failed:", err);

    // 7️⃣ Fallback safety
    if (cache.data && now - cache.lastFetch < MAX_FALLBACK_MS) {
      return cache.data;
    }

    return testData;
  } finally {
    cache.fetching = false;
  }
}
