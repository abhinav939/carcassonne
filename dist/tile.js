"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
var Tile = /** @class */ (function () {
    function Tile(description) {
        this.orientation = 0;
        this.location = [0, 0];
        this.description = description;
    }
    // Any number of methods:
    Tile.prototype.place = function () {
        return "Hi! I am " + this.description + " and " + this.orientation + ".";
    };
    return Tile;
}());
exports.Tile = Tile;
