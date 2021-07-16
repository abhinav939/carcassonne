/**
 * Tile class represents tiles in Carcassonne. An instance of a tile stores its location and orientation,
 * the segments it contains and the features in the file. A tile can be rotated by rotate() method and
 * placed on the board with place() method. The game automatically discards a file if it cannot be placed.
 */
class Tile {

    description: string
    orientation: number = 0
    location: Array<number> = [0, 0]


    constructor(description: string) {
        this.description = description
        // this.sides = getSidesFromDescription()
        // shields = int,
        // joined = bool
    }
    // Any number of methods:
    place(): string {
        return `Hi! I am ${this.description} and ${this.orientation}.`
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
