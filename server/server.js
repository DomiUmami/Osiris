import express from "express";
import cors from "cors";
import saintRouter from "./src/saint/router.js";

const app = express();

// -------------------------
// CORS CONFIG
// -------------------------
app.use(
  cors({
    origin: "http://localhost:3000", // your React dev server
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// -------------------------
// ROUTES
// -------------------------
app.use("/api/saint", saintRouter);

// -------------------------
// START SERVER
// -------------------------
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
