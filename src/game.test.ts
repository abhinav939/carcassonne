const gamelib = require('./game')

describe('When the game starts', () => {
    // 72 - the starting tile
    test('when playing the base game the tile stack should contain 71 tiles', () => {
        const game = new gamelib.Game(
            'base'
        )
        expect(game.stack).toHaveLength(71);
    });

    test('The starting tile is placed in the middle of the table.', () => {
        const game = new gamelib.Game(
            'base'
        )
        expect(game.placedTiles[0].location).toStrictEqual([0, 0]);
    });
});
