import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import GearController from '../controllers/gears.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get("/", GearController.getGears);

router.get("/:gearId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/gear.html"));
});

export default router;
