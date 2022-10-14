import { CreateGame } from "../../../main/usecases/createGame";
import { GetGameById } from "../../../main/usecases/getGameById";
import { GameInJsonFileRepository } from "../../../main/infrastructure/database/gameInJsonFileRepository";
import { Request, Response } from 'express';

import type * as GamesResource from "../../../main/infrastructure/resources/gamesResource"
const { gamesResource } = jest.requireActual<typeof GamesResource>("../../../main/infrastructure/resources/gamesResource")

jest.mock('../../../main/usecases/getGameById');
jest.mock('../../../main/usecases/createGame');
jest.mock('../../../main/infrastructure/database/gameInJsonFileRepository');
let spyMock = jest.fn();
let statusMock = {
    json: jest.fn(),
};

(GetGameById as any).mockReturnValue({ 
    execute: spyMock.mockResolvedValue({status: 200}),
    getInstance: spyMock,
});

(GetGameById as any).getInstance.mockReturnValue({ 
    execute: spyMock.mockResolvedValue({status: 200}),
});

(CreateGame as any).mockReturnValue({
    execute: spyMock
});

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

    describe("When getGameById is called", () => {
        req.params = {
            id: '123',
        };

        beforeEach(async () => {
            await gamesResource.getGameById(req, res);
        });

        test("Then GetGameById.getInstance is called with Repository", () => {
            expect(GetGameById.getInstance)
                .toHaveBeenCalledWith(expect.any(GameInJsonFileRepository));
        });

        test("Then getGameById.execute is called with req.params.id", () => {
        });

        test("Then res status is 200", () => {
            expect(res.status).toHaveBeenCalledWith(200);
        });
    })
})

export {};