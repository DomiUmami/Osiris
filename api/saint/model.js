// api/saint/model.js
import testData from "../../server/src/data/mockData.js";

// Fetch monsters from an external API safely
export async function fetchExternalMonsters(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch monsters from ${url}`);
  return res.json();
}

// Merge multiple data sources
export async function getAllSaintsMerged() {
  // -------------------------------
  // Toggle data sources
  // -------------------------------
  const includeLocal = true;     // include mockData
  const includeExternal1 = true; // external API 1
  const includeExternal2 = false;// external API 2

  // -------------------------------
  // Local data
  // -------------------------------
  let localMonsters = [];
  if (includeLocal) localMonsters = testData;

  // -------------------------------
  // External data
  // -------------------------------
  let externalMonsters = [];
  if (includeExternal1) {
    try {
      const data1 = await fetchExternalMonsters("https://mhw-db.com/monsters");
      externalMonsters.push(...data1);
    } catch (e) {
      console.warn("Failed to fetch external API 1:", e.message);
    }
  }

  if (includeExternal2) {
    try {
      const data2 = await fetchExternalMonsters("https://wilds.mhdb.io/en/monsters");
      externalMonsters.push(...data2);
    } catch (e) {
      console.warn("Failed to fetch external API 2:", e.message);
    }
  }

  // -------------------------------
  // Resolve ID collisions for local data
  // -------------------------------
  const usedIds = new Set(externalMonsters.map(m => m.id));
  const fixedLocal = localMonsters.map(m => {
    let newId = Number(m.id) || 0;
    while (usedIds.has(newId)) newId++;
    usedIds.add(newId);
    return { ...m, id: newId };
  });

  // -------------------------------
  // Merge and remove duplicates by name
  // -------------------------------
  const merged = [...externalMonsters, ...fixedLocal];
  const seenNames = new Set();
  const unique = merged.filter(m => {
    if (seenNames.has(m.name)) return false;
    seenNames.add(m.name);
    return true;
  });

  return unique;
}
