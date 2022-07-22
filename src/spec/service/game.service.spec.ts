import { gameService } from "../../main/service/game.service";
import { Request, Response } from 'express';

describe('When getAllGames is called', () => {
  const req = {} as Request;
  const res = {} as Response;
  res.status = () => res;
  res.json = () => res;

  xit('Then return all games', () => {
    const database = { games: [{
        id: 0,
        name: "some",
        plataform: "some",
        price: 120
      }
    ]}

    jest.mock('../../main/database/db.json', () => {database})

    expect(gameService.getAllGames(req, res)).toStrictEqual({"hello": "world"});
  });
});
