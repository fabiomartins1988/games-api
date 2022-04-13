import { IGame } from "../interface/game.interface";
import fs from "fs";
class GameRepository {

  public save(games: IGame[]) {
    let database = { "games": games };
    fs.writeFile("src/main/database/db.json", JSON.stringify(database), (error) => {
      if (error) {
        console.log(error);
      }
    })
  }
}

export const gameRepository = new GameRepository();
