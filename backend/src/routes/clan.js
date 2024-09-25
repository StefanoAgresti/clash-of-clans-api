import express from "express";
import { getClanByTag } from "../controllers/clan.js";

export const router = express.Router();
router.use(express.json());

// GET /clans/clanTag
router.get("/:clanTag", getClanByTag);
