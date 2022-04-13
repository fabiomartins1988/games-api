import { gamesController } from '../controller/games.controller';
import express, { Router } from 'express';

const router = Router();
router.use(express.json());

router.get("/games", gamesController.getGames);

router.post("/game", gamesController.createGame);

export = router;