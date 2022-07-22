import { gamesResource } from '../infrastructure/resources/gamesResource';
import express, { Router } from 'express';

const router = Router();
router.use(express.json());

router.post("/game", gamesResource.createGame);

export = router;