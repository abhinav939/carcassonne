import { TileSet } from './tilesets';
import { Tile } from './tile';
declare class Game {
    private static _startPosition;
    stack: Tile[];
    initTiles(tileset: TileSet): Tile[];
    constructor(tileset: string);
}
export { Game };
