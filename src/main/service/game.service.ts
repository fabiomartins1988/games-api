import { Request, Response } from 'express';
import { IGame } from "../infrastructure/interface/game.interface";
import * as db from  "../database/db.json";

class GameService {
  public getAllGames(req: Request, res: Response){
    let games: IGame[] = db.games;
    return res.json(games);
  }
}

export const gameService = new GameService();