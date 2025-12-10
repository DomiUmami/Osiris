import { getAllSaintsMerged } from "./saint/model.js";

export default async function handler(req, res) {
  try {
    const monsters = await getAllSaintsMerged();

    // Ensure proper JSON headers
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*"); // allow frontend requests

    res.status(200).json(monsters);
  } catch (err) {
    console.error("Backend fetch error:", err);
    res.status(500).json({ message: "Failed to fetch monsters" });
  }
}
