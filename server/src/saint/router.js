// src/saint/router.js
import express from "express";
import { getAllSaintsMerged } from "./model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const monsters = await getAllSaintsMerged();
    res.json(monsters);
  } catch (err) {
    console.error("Error fetching monsters:", err);
    res.status(500).json({ message: "Failed to fetch monsters" });
  }
});

export default router;
