const gamelib = require('./game')

describe('Game tests', () => {
    test('tile stack should contain 72 tiles when playing the base game', () => {
        const game = new gamelib.Game(
            'base'
        )
        console.log(game.stack)
        expect(game.stack).toHaveLength(72);
    });
});
