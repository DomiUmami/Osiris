// api/saint/model.js
import testData from "./mockData";

export async function getAllSaintsMerged() {
  // Only use local mock data
  const fixedLocal = testData.map((m, index) => ({
    ...m,
    id: Number(m.id) || index // ensure every monster has a unique ID
  }));

  return fixedLocal;
}
