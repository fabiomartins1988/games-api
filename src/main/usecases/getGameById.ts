import { GameRepository } from "../infrastructure/repositories/gameRepository";
import { Game } from "../domain/game";

export class GetGameById {

  private static _instance: GetGameById;

  private constructor(private gameRepository: GameRepository) {}

  static getInstance(gameRepository: GameRepository) {
    if (!GetGameById._instance) {
      GetGameById._instance = new GetGameById(gameRepository);
    }
    return GetGameById._instance;
  }

  async execute(gameId: String): Promise<Game> {
    let id: Number = +gameId;
    let game: Game = await this.gameRepository.getById(id);
    return game;
  }
}
