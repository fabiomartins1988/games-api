import {Game} from "../../domain/game";

export interface GameRepository {
    save(games: Game): Promise<void>;
}
