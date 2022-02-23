import { IGame } from "../interfaces/IGame"
import { Request, Response, Router } from 'express';

const router = Router();

const getAllGames = (request: Request, response: Response) => {
  //let games: IGame[] = //Retrieve json and save as an array of games

  response.status(200).json({'hello': 'world'});
};

router.get('/allgames', getAllGames);

export = router;