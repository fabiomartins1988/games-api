import { GameRepository } from "../infrastructure/repositories/gameRepository";
import * as db from  "../database/db.json";
import { Game } from "../domain/game";

export class CreateGame {

  constructor(private gameRepository: GameRepository) {}

  async execute(input: CreateGameRequest): Promise<CreateGameResponse> {
    const newGame = new Game(input)
    await this.gameRepository.save(newGame)
    return newGame.toJSON();
  }
}

type CreateGameRequest = {
  id: number;
  name: string;
  platform: string;
  multiplayer: boolean;
  price: number;
  launchDate: string;
  genre: string;
  developer: string;
}

type CreateGameResponse = {
  id: number;
  name: string;
  platform: string;
  multiplayer: boolean;
  price: number;
  launchDate: string;
  genre: string;
  developer: string;
}
