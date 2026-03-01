import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import gearData from "../data/gearData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(gearData);
});

router.get("/:gearId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/gear.html"));
});

export default router;
