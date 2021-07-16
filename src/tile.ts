/**
 * Represents a tile in Carcassonne. An instance of a tile stores its location and orientation,
 * the sides it contains and the features on each side. A tile can be rotated by rotate() method and
 * placed on the board with place() method.
 */
class Tile {

    description: string
    orientation: number = 0
    public location: Vector = null


    constructor(description: string) {
        this.description = description
        // this.sides = getSidesFromDescription()
        // shields = int,
        // joined = bool
    }

    place(location: Vector) {
        this.location = location
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
