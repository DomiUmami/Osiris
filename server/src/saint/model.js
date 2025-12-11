// src/saint/model.js
import testData from "../data/mockData.js";

// Fetch monsters from an external API
export async function fetchExternalMonsters() {
  const res = await fetch("/api/saint");
  if (!res.ok) throw new Error(`Failed to fetch monsters from ???`);
  return res.json();
}



// Merge multiple data sources
export async function getAllSaintsMerged() {
  // -------------------------------
  // TOGGLE DATA SOURCES HERE
  // -------------------------------

  const includeLocal = true;         // include mockData
  const includeExternal1 = false;     // include data1
  const includeExternal2 = false;    // include data2

  // -------------------------------
  // 1️⃣ Prepare local data
  // -------------------------------
  let localMonsters = [];
  if (includeLocal) {
    localMonsters = testData;
  }

  // -------------------------------
  // 2️⃣ Prepare external data
  // -------------------------------
  let externalMonsters = [];

  if (includeExternal1) {
    const data1 = await fetchExternalMonsters("https://mhw-db.com/monsters");
    externalMonsters.push(...data1);
  }

  if (includeExternal2) {
    const data2 = await fetchExternalMonsters("https://wilds.mhdb.io/en/monsters");
    externalMonsters.push(...data2);
  }


  // -------------------------------
  // 3️⃣ Resolve ID collisions for local data
  // -------------------------------
  const usedIds = new Set(externalMonsters.map(m => m.id));

  const fixedLocal = localMonsters.map(m => {
    let newId = Number(m.id) || 0;
    while (usedIds.has(newId)) newId++;
    usedIds.add(newId);
    return { ...m, id: newId };
  });

  // -------------------------------
  // 4️⃣ Merge all data
  // -------------------------------
  const merged = [...externalMonsters, ...fixedLocal];

  // -------------------------------
  // 5️⃣ Remove duplicates by name
  // -------------------------------
  const seenNames = new Set();
  const unique = merged.filter(m => {
    if (seenNames.has(m.name)) return false;
    seenNames.add(m.name);
    return true;
  });

  return unique;
}
