import { Router } from "express";

import {
  getCapitalRankings,
  getClanBbRankings,
  getClanRankings,
} from "../controllers/clan.js";

import {
  getPlayerBbRankings,
  getPlayerRankings,
} from "../controllers/player.js";

export const router = Router();

// GET /locations/...
router.get("/:location/rankings/capitals", getCapitalRankings);

// GET /locations/...
router.get("/:location/rankings/clans", getClanRankings);

//GET /locations/...
router.get("/:location/rankings/players", getPlayerRankings);

//GET /locations/...
router.get("/:location/rankings/players-builder-base", getPlayerBbRankings);

//GET /locations/...
router.get("/:location/rankings/clans-builder-base", getClanBbRankings);
