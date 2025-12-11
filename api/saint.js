import { getAllSaintsMerged } from "./model.js";

export default async function handler(req, res) {
  try {
    const saints = await getAllSaintsMerged();
    res.status(200).json(saints);
  } catch (err) {
    console.error("Error in /api/saint:", err);
    res.status(500).json({ error: "Server error" });
  }
}
