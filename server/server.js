import express from "express";
import gears from "./routes/gears.js";

const app = express();

app.use("/public", express.static("./public")); // middleware
app.use("/scripts", express.static("./public/scripts"));

app.use("/gears", gears);

app.get("/", (req, res) => {
  res
    .status(200)
    .send('<h1 style="text-align: center; margin-top: 50px;">Yurr</h1>');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
