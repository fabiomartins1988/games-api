import { gameService } from "../../main/service/game.service";
import { Request, Response } from 'express';

describe('When getAllGames is called', () => {
  const req = {} as Request;
  const res = {} as Response;
  it('Then the return is "hello" : "world" json', () => {
    expect(gameService.getAllGames(req, res)).toBe("");
  });
});