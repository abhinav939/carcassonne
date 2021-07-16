/**
 * Tile class represents tiles in Carcassonne. An instance of a tile stores its location and orientation,
 * the segments it contains and the features in the file. A tile can be rotated by rotate() method and
 * placed on the board with place() method. The game automatically discards a file if it cannot be placed.
 */
declare class Tile {
    description: string;
    orientation: number;
    location: Array<number>;
    constructor(description: string);
    place(): string;
}
export { Tile };
