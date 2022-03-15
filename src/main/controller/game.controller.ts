// import UserService from '../service/game.service';
/*import router from '../routes/routes';
import { GameService } from '../service/game.service'

router.get("/games", (resquest, response) => {

  response.status(200).json({'hello': 'world'});
});

router.get("/games/:id", (resquest, response) => {

  response.status(200).json({'hello': 'world'});
});

router.get("/games/:name", (resquest, response) => {

  response.status(200).json({'hello': 'world'});
});

router.post("/games", (resquest, response) => {

  response.status(201).send();
});*/

import { Request, Response } from 'express';

class GameController {
  
  public getGames(req:Request, res: Response) {
    return res.json({
      response: 'Hello Kata'
    });
  } 
}

export const gameController = new GameController();
