import { Request, Response } from 'express';
import { CreateGame} from "../../usecases/createGame";
import {GameInJsonFileRepository} from "../database/gameInJsonFileRepository";

const gameInJsonFileRepository = new GameInJsonFileRepository();

class GamesResource {
    async createGame(req: Request, res: Response) {
        const createGameUseCase = new CreateGame(gameInJsonFileRepository)
        const response = await createGameUseCase.execute(req.body);
        res.status(201).json(response);
    }
}

export const gamesResource = new GamesResource()
