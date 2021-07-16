"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileStack = void 0;
var tilesets_1 = require("./tilesets");
var TileStack = /** @class */ (function () {
    function TileStack() {
        this.initialTiles = function (tileset) {
            var newTiles = [];
            for (descriptor in tileset) {
                var count = tileset[descriptor];
                for (var i = 0; i < count; i++) {
                    newTiles.push(descriptor);
                }
            }
            return newTiles;
        };
        this.tiles = this.initialTiles(tilesets_1.BaseTiles);
    }
    return TileStack;
}());
exports.TileStack = TileStack;
