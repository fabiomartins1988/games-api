import { IGame } from '../games/game.interface';
import { GameService } from '../games/game.service';
import { Router } from 'express';

const router = Router();

router.get("/games", (resquest, response) => {

  response.status(200).json({'hello': 'world'});
});

router.post("/games", (resquest, response) => {

  response.status(201).send();
});



export = router;