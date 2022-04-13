import { Request, Response } from 'express';
import { IGame } from "../infrastructure/interface/game.interface";
import * as db from  "../database/db.json";
import { gameRepository } from "../infrastructure/repository/game.repository"

class GameService {
  public getAllGames(req: Request, res: Response){
    let games: IGame[] = db.games;
    return res.json(games);
  }

  public createGame(req: Request, res: Response) {
    let { name, plataform, multiplayer, price } = req.body;
    let games: IGame[] = db.games;
    let lastId = games[games.length - 1].id;

    let newGame: IGame = {
      id: lastId + 1,
      name: name,
      plataform: plataform,
      multiplayer: multiplayer,
      price: price,
    }

    games.push(newGame);
    gameRepository.save(games);
    return res.json(newGame);
  }
}

export const gameService = new GameService();