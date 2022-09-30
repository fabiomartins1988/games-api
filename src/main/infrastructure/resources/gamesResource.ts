import { Request, Response } from 'express';
import { CreateGame } from "../../usecases/createGame";
import { GetGameById } from "../../usecases/getGameById";
import { GameInJsonFileRepository } from "../database/gameInJsonFileRepository";

const gameInJsonFileRepository = new GameInJsonFileRepository();

class GamesResource {
    async createGame(req: Request, res: Response) {
        const createGameUseCase = new CreateGame(gameInJsonFileRepository)
        const response = await createGameUseCase.execute(req.body);
        res.status(201).json(response);
    }

    async getGameById(req: Request, res: Response) {
        const getGameByIdUseCase = GetGameById.getInstance(gameInJsonFileRepository)
        await getGameByIdUseCase.execute(req.params.id)
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((error) => {
                res.status(404).json(error);
            });
        return;
    }
}

export const gamesResource = new GamesResource();
