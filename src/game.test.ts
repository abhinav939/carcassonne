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
        expect(game.players.length).toStrictEqual(2);
    });

    test("Players should be between 2-6", () => {
        const arr = [1, 7]
        const oneOrSeven = arr[Math.floor(Math.random() * arr.length)];

        expect(() => {
            new Game('base', oneOrSeven);
        }).toThrow();
    });

    test("All Players should start the game with 0 points", () => {
        const playerCount = Math.floor(Math.random() * (6 - 2 + 1) + 2)
        const game = new Game('base', playerCount);

        for (const player of game.players) {
            expect(player.points).toStrictEqual(0);
        }
    });

    test("All Players should start with 6 Meeple", () => {
        const playerCount = Math.floor(Math.random() * (6 - 2 + 1) + 2)
        const game = new Game('base', playerCount);

        for (const player of game.players) {
            expect(player.meeple.count).toStrictEqual(6);
        }


    });

});
