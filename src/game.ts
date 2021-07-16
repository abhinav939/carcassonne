import { BaseTiles, TileSet } from './tilesets'
import { Tile } from './tile'

type Vector = [number, number];

class Game {

    private static _startPosition: Vector = [0, 0]

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
    }
}

export { Game }
