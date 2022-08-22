import { GameRepository } from "../../main/infrastructure/repositories/gameRepository";
import { Game } from "../../main/domain/game";

import type * as createGameUsecase from "../../main/usecases/createGame"
const { CreateGame } = jest.requireActual<typeof createGameUsecase>("../../main/usecases/createGame")

jest.mock('../../main/infrastructure/repositories/gameRepository');
jest.mock('../../main/domain/game');

let gameRepository : GameRepository = {
    save: jest.fn().mockReturnValueOnce(''),
};

type CreateGameRequestMock = {
    id: number;
    name: string;
    platform: string;
    multiplayer: boolean;
    price: number;
    launchDate: string;
    genre: string[];
    developer: string;
    imageUrl: string;
};

let createGameMock = new CreateGame(gameRepository);

describe("Given CreateGame usecase", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("When execute is called", () => {
        let gameSample = {
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
        
        let inputMock : CreateGameRequestMock = gameSample;

        beforeEach(() => {
            createGameMock.execute(inputMock);
        });

        test("Then a new game is created with input data", () => {
          expect(Game).toHaveBeenCalledWith(inputMock);
        });

        test("Then repository save is called with new game", () => {
            expect(gameRepository.save).toHaveBeenCalled();
        });
    });
})

export {};