// Import the logic and mock data from local files inside /api
import { getAllSaintsMerged } from "./model.js";

export default async function handler(req, res) {
  try {
    // Fetch all monsters (or saints) — returns mock data merged with any external sources if enabled
    const saints = await getAllSaintsMerged();

    // Send JSON response
    res.status(200).json(saints);
  } catch (err) {
    console.error("Error in /api/saint:", err);

    // Return a 500 error with message
    res.status(500).json({ error: "Server error" });
  }
}
