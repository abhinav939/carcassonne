import { TileStack } from './tilestack'

type Vector = [number, number]

export class Game {
    // Any number of properties:
    static startPosition: Vector = [0, 0]

    private startTileStack: TileStack = new TileStack()

    constructor() {
        //this.startTile.place(Game.startPosition)
    }
    // Any number of methods:
}
