import { Game } from './game';

describe('When the game starts', () => {
    // 72 - the starting tile
    test('when playing the base game the tile stack should contain 71 tiles', () => {
        const game = new Game(
            'base', 2
        )
        expect(game.stack).toHaveLength(71);
    });

    test('The starting tile is placed in the middle of the table.', () => {
        const game = new Game(
            'base', 2
        )
        expect(game.placedTiles[0].location).toStrictEqual([0, 0]);
    });


    test('the game should start with the specified number of players ', () => {
        const game = new Game(
            'base',
            2
        )
        expect(game.players).toStrictEqual(2);
    });

    test("Players should be between 2-6", () => {
        const arr = [1, 7]
        const oneOrSeven = arr[Math.floor(Math.random() * arr.length)];

        expect(() => {
            new Game('base', oneOrSeven);
        }).toThrow();
    });
});
