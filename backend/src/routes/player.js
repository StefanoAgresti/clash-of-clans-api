import express from "express";
import { getPlayerByTag } from "../controllers/player.js";

export const router = express.Router();
router.use(express.json());

// GET  /players/...
router.get("/:playerTag", getPlayerByTag);
