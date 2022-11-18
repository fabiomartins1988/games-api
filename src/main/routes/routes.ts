import { gamesResource } from '../infrastructure/resources/gamesResource';
import express, { Router } from 'express';

const router = Router();
router.use(express.json());

router.post("/api/game", gamesResource.createGame);

router.get("/api/game/:id", gamesResource.getGameById);

export = router;