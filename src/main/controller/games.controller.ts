import { Request, Response } from 'express';
import { gameService } from '../service/game.service';

class GamesController {
  public getGames(req: Request, res: Response){
    return gameService.getAllGames(req, res);
  }
}

export const gamesController = new GamesController();