import { BaseTiles, TileSet } from './tilesets'
import { Tile } from './tile'

class Game {

    private readonly _startPosition: Vector = [0, 0]

    public stack: Tile[] = []

    initTiles(tileset: TileSet) {
        const newTiles: Tile[] = []

        tileset.forEach((tileDist) => {
            for (let i = 0; i < tileDist.count; i++) {
                newTiles.push(new Tile(tileDist.tile.description)) // TODO: joined? + shields
            }
        });

        return newTiles
    }

    constructor(tileset: string) {
        switch (tileset) {
            case 'base': {
                this.stack = this.initTiles(BaseTiles)
            }
        }

        // The starting tile is placed in the middle of the table.
        const startTile = this.stack.find(tile => tile.description == 'crfr')

        if (startTile === undefined) {
            throw new TypeError('The start tile was missing/undefined!');
        }

        startTile.place(this._startPosition)
    }
}

export { Game }
