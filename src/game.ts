import { BaseTiles, TileSet } from './tilesets'
import { Tile } from './tile'

/**
 * Represents a Game of Carcassonne.
 * The Game:
 * - Adds the start tile during instantiation.
 * - Tracks all tile placements so far.
 * - Checks if a new tile placement is valid
 * - Adds a new tile placement if valid
 * - Handles joining tile features triggered by the new tile placement.
 * - Update score changes triggered by the new tile placement.
 */
class Game {

    private readonly _startPosition: Vector = [0, 0]

    public stack: Tile[] = []

    public placedTiles: Tile[] = []

    public players: number

    initTiles(tileset: TileSet): Tile[] {
        const newTiles: Tile[] = []

        tileset.forEach((tileDist) => {
            for (let i = 0; i < tileDist.count; i++) {
                newTiles.push(new Tile(tileDist.tile.description)) // TODO: joined? + shields
            }
        });

        /* Random shuffle the tiles */
        for (let i = newTiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = newTiles[i];
            newTiles[i] = newTiles[j];
            newTiles[j] = temp;
        }

        return newTiles
    }

    // Set up the game
    constructor(tileset: string, players: number) {
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

        startTile.place(this, this._startPosition)
        this.players = players

        get players(): Number {
            return this.players;
        }
        set players(range: Number) {
            if (range < 2 || range > 6) { throw new RangeError(); }
        }
    }


    // Start the game loop
    start(): void {
        // While stack != empty
        //      Player draws a tile from stack
        //      Player places tile (validate)
        //      Player places Meeple (validate)
        //      Scoring
        //      Next Player's turn

        // Final score & winner
    }
}

export { Game }
