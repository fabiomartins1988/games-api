import { gameService } from "../../main/service/game.service";
import { Request, Response } from 'express';

describe('When getAllGames is called', () => {
  const req = {} as Request;
  const res = {} as Response;
  res.json = jest.fn().mockReturnValue({"hello": "world"});
  it('Then the return is "hello" : "world" json', () => {
    expect(gameService.getAllGames(req, res)).toStrictEqual({"hello": "world"});
  });
});