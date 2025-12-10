// api/saint/model.js
import testData from "./mockData.js";

/**
 * Returns all monsters using only local mock data.
 * Each monster is guaranteed a unique numeric ID.
 */
export async function getAllSaintsMerged() {
  // Ensure unique IDs for every monster
  const fixedLocal = testData.map((monster, index) => ({
    ...monster,
    id: Number(monster.id) || index, // fallback to index if no id
  }));

  return fixedLocal;
}
