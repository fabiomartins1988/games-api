import { GameRepository } from "../../main/infrastructure/repositories/gameRepository";
import { Game } from "../../main/domain/game";

import type * as getGameByIdUsecase from "../../main/usecases/getGameById"
const { GetGameById } = jest.requireActual<typeof getGameByIdUsecase>("../../main/usecases/getGameById")

jest.mock('../../main/infrastructure/repositories/gameRepository');
jest.mock('../../main/domain/game');

const gameMock = {
    id: 1,
    name: 'sample',
    platform: 'sample',
    multiplayer: false,
    price: 0,
    launchDate: 'sample',
    genre: ['sample'],
    developer: 'sample',
    imageUrl: 'sample',
};

let gameRepository : GameRepository = {
    save: jest.fn().mockReturnValue(''),
    getById: jest.fn().mockReturnValue(gameMock),
};

let getGameByIdMock: getGameByIdUsecase.GetGameById;

describe("Given GetGameById usecase", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        getGameByIdMock = GetGameById.getInstance(gameRepository);
    });

    describe("When getInstance is called", () => {
        let firstInstance: getGameByIdUsecase.GetGameById;
        let secondInstance: getGameByIdUsecase.GetGameById;

        beforeEach(() => {
            firstInstance = GetGameById.getInstance(gameRepository);
            secondInstance = GetGameById.getInstance(gameRepository);
        });

        test("Then first and second calls return same instance", () => {
            expect(firstInstance).toBe(secondInstance);
        });
    });

    describe("When execute is called", () => {
        let idMock: String = '1';
        let result: Game;

        beforeEach(async () => {
            result = await getGameByIdMock.execute(idMock);
        });

        test("Then repository getById is called with id converted to number", () => {
            expect(gameRepository.getById).toHaveBeenCalledWith(+idMock);
        });

        test("Then returns game from gameRepository", () => {
            expect(result).toBe(gameMock);
        });
    });
})

export {};