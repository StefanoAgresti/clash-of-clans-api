import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { router as playerRouter } from "./routes/player.js";
import { router as clanRouter } from "./routes/clan.js";
import { router as locationRouter } from "./routes/location.js";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

dotenv.config();

const app = express();
const port = 3000;

app.use("/public", express.static(path.join(__dirname, "..", "public")));

app.use(cors());
app.use(express.json());

app.use("/players", playerRouter);
app.use("/locations", locationRouter);
app.use("/clans", clanRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
