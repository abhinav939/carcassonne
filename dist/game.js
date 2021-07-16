"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var tilesets_1 = require("./tilesets");
var tile_1 = require("./tile");
var Game = /** @class */ (function () {
    function Game(tileset) {
        this.stack = [];
        switch (tileset) {
            case 'base': {
                this.stack = this.initTiles(tilesets_1.BaseTiles);
            }
        }
    }
    Game.prototype.initTiles = function (tileset) {
        var newTiles = [];
        tileset.forEach(function (tileDist) {
            for (var i = 0; i < tileDist.count; i++) {
                newTiles.push(new tile_1.Tile(tileDist.tile.description)); // TODO: joined? + shields
            }
        });
        return newTiles;
    };
    Game._startPosition = [0, 0];
    return Game;
}());
exports.Game = Game;
