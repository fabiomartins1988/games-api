import { Request, Response } from 'express';

class GameService {
  public getAllGames(req: Request, res: Response){
    return res.json({"hello": "world"});
  }
}

export const gameService = new GameService();