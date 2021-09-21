import { BaseTiles, TileSet } from './tilesets'
import { Tile } from './tile'
import Player from './player'
import Move from './move'


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

    private _players: Player[] = []

    public colours = ['green', 'yellow', 'red', 'blue', 'black', 'white']

    public inProgress = false

    public finished = false

    public currentPlayer: Player

    public getPossibleMoves(): Move[] {
        //check which tiles have been placed
        //what are the coordinates of placed tiles
        //create a list of vectors that are adjacent to placed tiles (emptyVectors)
        //check which combination of rotations of newTile fit into these vectors
    }

    private listEmptyVectors(): Vector[] {

        for (const tile of this.placedTiles) {
            console.log(tile);
        }

        return [0,0]
        // for each tile in placedTile {
        // for all 4 vectors around each tile {
        // if empty,add to list
        //}
        // strip duplicates
        // }
        // Big O =>
    }


    addPlayer(player: Player): void {
        if (this.inProgress === true) {
            throw new Error("Can't change the number of players: game has already started")
        }
        if (this._players.length === 6) {
            throw new Error("Too many players!")
        }

        const colour = this.colours.pop()
        player.colour = colour!

        this._players.push(player)
    }

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
    constructor(tileset: string, playerCount: number) {
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

        if (playerCount < 2 || playerCount > 6) { throw new RangeError("Must start with between 2-6 players."); }
        for (let i = 0; i < playerCount; i++) {
            this.addPlayer(new Player())
        }

        this.currentPlayer = this._players[0]
    }

    public get players(): Player[] {
        return this._players;
    }

    // Start the game loop
    start(): void {
        this.inProgress = true
        while (this.stack.length !== 0) {
            for (let i = 0; i < this._players.length; i++) {
                this._players[i] = this.currentPlayer
                const nextTile: Tile = this.stack.pop()! //double check how to pop items in array so that it's not undefined
                console.log(`The tile is ${nextTile}`)
                new Move(this._players[i], nextTile)
            }
        }
        console.log("The game has ended")
        this.inProgress = false
        this.finished = true
        //      Player draws a tile from stack

        //      Scoring
        //      Next Player's turn

        // Final score & winner
    }
}

export { Game }
