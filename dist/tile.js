"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
/**
 * Tile class represents tiles in Carcassonne. An instance of a tile stores its location and orientation,
 * the segments it contains and the features in the file. A tile can be rotated by rotate() method and
 * placed on the board with place() method. The game automatically discards a file if it cannot be placed.
 */
var Tile = /** @class */ (function () {
    function Tile(description) {
        this.orientation = 0;
        this.location = [0, 0];
        this.description = description;
        // this.sides = getSidesFromDescription()
        // shields = int,
        // joined = bool
    }
    // Any number of methods:
    Tile.prototype.place = function () {
        return "Hi! I am " + this.description + " and " + this.orientation + ".";
    };
    return Tile;
}());
exports.Tile = Tile;
