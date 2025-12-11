import testData from "./mockData";

// Fetch monsters from an external API
export async function fetchExternalMonsters(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch monsters from ${url}`);
  return res.json();
}

// Merge multiple data sources
export async function getAllSaintsMerged() {
  const includeLocal = false;
  const includeExternal1 = false;
  const includeExternal2 = true;

  // 1️⃣ Prepare local data
  let localMonsters = includeLocal ? testData : [];

  // 2️⃣ Prepare external data
  let externalMonsters = [];

  if (includeExternal1) {
    const data1 = await fetchExternalMonsters("https://mhw-db.com/monsters");
    externalMonsters.push(...data1);
  }

  if (includeExternal2) {
    const data2 = await fetchExternalMonsters("https://wilds.mhdb.io/en/monsters");
    externalMonsters.push(...data2);
  }

  // 3️⃣ Assign unique IDs to everything
  const allMonsters = [...externalMonsters, ...localMonsters];
  const usedIds = new Set();
  const uniqueMonsters = allMonsters.map((m, idx) => {
    let newId = m.id != null ? Number(m.id) : idx;
    while (usedIds.has(newId)) newId++;
    usedIds.add(newId);
    return { ...m, id: newId };
  });

  // 4️⃣ Remove duplicates by name
  const seenNames = new Set();
  const finalUnique = uniqueMonsters.filter((m) => {
    if (seenNames.has(m.name)) return false;
    seenNames.add(m.name);
    return true;
  });

  return finalUnique;
}
