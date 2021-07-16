"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var tilestack_1 = require("./tilestack");
var Game = /** @class */ (function () {
    function Game() {
        this.startTileStack = new tilestack_1.TileStack();
        //this.startTile.place(Game.startPosition)
    }
    // Any number of properties:
    Game.startPosition = [0, 0];
    return Game;
}());
exports.Game = Game;
