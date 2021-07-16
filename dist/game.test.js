"use strict";
var gamelib = require('./game');
describe('Game tests', function () {
    test('tile stack should contain 72 when playing the base game', function () {
        var game = new gamelib.Game('base');
        console.log(game.stack);
        expect(game.stack).toHaveLength(72);
    });
});
