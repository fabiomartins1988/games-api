import {GameRepository} from "../repositories/gameRepository";
import * as db from  "../../database/db.json";
import {Game} from "../../domain/game";
import fs from "fs";

export class GameInJsonFileRepository implements GameRepository {
    public save(game: Game): Promise<void> {
        const items = db.games;
        items.push(game);
        let database = { "games": items };
        fs.writeFile("src/main/database/db.json", JSON.stringify(database), (error) => {
            if (error) {
                console.log(error);
            }
        })
        return Promise.resolve(undefined);
    };

    public getById(id: Number): Promise<Game> {
        let result = getArrayObjectById(id);
        if (result === undefined) 
            return Promise.reject('Game not found');
        return Promise.resolve(new Game(result));
    };
}

function getArrayObjectById(id: Number) {
    return db.games.find(game => game.id === id);
}
