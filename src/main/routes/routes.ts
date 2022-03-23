import { gamesController } from '../controller/games.controller';
import { Router } from 'express';

const router = Router();

router.get("/games", gamesController.getGames);

export = router;