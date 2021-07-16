"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileStack = void 0;
var tile_1 = require("./tile");
var TileStack = /** @class */ (function () {
    function TileStack() {
        this.initialTile = new tile_1.Tile('cccc');
        this.tiles = [this.initialTile];
    }
    return TileStack;
}());
exports.TileStack = TileStack;
