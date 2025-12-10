// server.js
import express from "express";
import cors from "cors";
import saintRouter from "./src/saint/router.js";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/saint", saintRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
