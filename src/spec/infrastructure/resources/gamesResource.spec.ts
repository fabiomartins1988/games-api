import { CreateGame } from "../../../main/usecases/createGame";
import { GameInJsonFileRepository } from "../../../main/infrastructure/database/gameInJsonFileRepository";
import { Request, Response } from 'express';

import type * as GamesResource from "../../../main/infrastructure/resources/gamesResource"
const { gamesResource } = jest.requireActual<typeof GamesResource>("../../../main/infrastructure/resources/gamesResource")

jest.mock('../../../main/usecases/createGame');
jest.mock('../../../main/infrastructure/database/gameInJsonFileRepository');
let spyMock = jest.fn();
let statusMock = {
    json: jest.fn(),
};

(CreateGame as any).mockImplementation(() => {
    return { execute: spyMock };
})

let res = {
    status: jest.fn().mockReturnValue(statusMock)
} as any as Response;

let req = {
    body: 'body',
} as any as Request;

let jsonRepositoryMock = new GameInJsonFileRepository();

describe("Given gamesResource", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("When createGame is called", () => {
        let createGameMock = new CreateGame(jsonRepositoryMock);

        beforeEach(async () => {
            await gamesResource.createGame(req, res);
        });

        test("Then CreateGame is called", () => {
            expect(CreateGame).toHaveBeenCalled();
        });

        test("Then createGame.execute is called with req.body", () => {
            expect(createGameMock.execute).toHaveBeenCalledWith('body');
        });

        test("Then res status is 201", () => {
            expect(res.status).toHaveBeenCalledWith(201);
        });
      })
})

export {};