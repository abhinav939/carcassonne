import { Game } from './game'

describe('Game tests', () => {
    test('tile stack should contain 72 when playing the base game', () => {
        const game = new Game(
            'base'
        )
        expect(game.stack).toHaveLength(72);
    });
});
