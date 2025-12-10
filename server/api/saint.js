import { getAllSaintsMerged } from "../src/saint/model.js";

export default async function handler(req, res) {
  try {
    const monsters = await getAllSaintsMerged();
    res.status(200).json(monsters);
  } catch (err) {
    console.error("Error fetching monsters:", err);
    res.status(500).json({ message: "Failed to fetch monsters" });
  }
}
