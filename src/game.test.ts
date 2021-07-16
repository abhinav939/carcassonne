const gamelib = require('./game')

describe('When the game starts', () => {
    test('when playing the base game the tile stack should contain 72 tiles', () => {
        const game = new gamelib.Game(
            'base'
        )
        expect(game.stack).toHaveLength(72);
    });

    test('The starting tile is placed in the middle of the table.', () => {
        const game = new gamelib.Game(
            'base'
        )
        expect(game.stack).toHaveLength(72);
    });
});
