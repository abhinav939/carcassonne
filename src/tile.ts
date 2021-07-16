import { Game } from './game'
const util = require('util')

type Orientation = 0 | 90 | 180 | 270
enum Direction {
    Clockwise,
    AntiClockWise
}

/**
 * Represents a tile in Carcassonne. An instance of a tile stores its location and orientation,
 * the sides it contains and the features on each side. A tile can be rotated by rotate() method and
 * placed on the board with place() method.
 */
class Tile {

    id: string

    description: string

    placed: boolean = false

    orientation: Orientation = 0

    public location: Vector = null

    private genUniqueId(): string {
        const dateStr = Date
            .now()
            .toString(36); // convert num to base 36 and stringify

        const randomStr = Math
            .random()
            .toString(36)
            .substring(2, 8); // start at index 2 to skip decimal point

        return `${dateStr}-${randomStr}`;
    }

    constructor(description: string) {
        this.id = this.genUniqueId()
        this.description = description
        // this.sides = getSidesFromDescription()
        // shields = int,
        // joined = bool
    }

    place(game: Game, location: Vector) {
        this.location = location

        // pop off game.stack
        let stack = game.stack.filter(tile => {
            return tile.id != this.id;
        })
        game.stack = stack
        game.placedTiles.push(this)
    }

    rotate(rotations: number, direction: Direction) {
        if (this.placed !== false) {
            throw new Error('Tile cannot be rotated when placed')
        }

        console.log('rotated tile')
    }

    // getSidesFromDescription(descriptor: string): Array<Side> {
    //     // sides = []
    //     // for char in descriptor:
    //     //   getSideFromLetter(char)
    //     // if contains D then Double = True
    //     // if contains J then Joined = True
    // }

    // getSideFromLetter(character: string): Side {
    //     // if character == 'c'
    //     // {
    //     //  return City
    //     // }
    // }
}

export { Tile }
