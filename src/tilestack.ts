import { Tile } from './tile'
import { TileSet, BaseTiles } from './tilesets'

class TileStack {

    private tiles: string[] // Tile[]

    private initialTiles = (tileset: TileSet) => {
        const newTiles: string[] = []

        for (tileDistribution in tileset) {
            const count = tileset[descriptor];
            for (let i = 0; i < count; i++) {
                newTiles.push(descriptor)
            }
        }

        return newTiles
    }

    constructor() {
        this.tiles = this.initialTiles(BaseTiles)
    }
}

export { TileStack }


