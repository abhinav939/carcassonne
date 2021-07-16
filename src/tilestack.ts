import { Tile } from './tile'

class TileStack {

    private tiles: Tile[]

    private initialTile = new Tile('cccc')

    constructor() {
        this.tiles = [this.initialTile]
    }
}

export { TileStack }


