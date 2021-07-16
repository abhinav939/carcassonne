/**
 * Represents a tile in Carcassonne. An instance of a tile stores its location and orientation,
 * the sides it contains and the features on each side. A tile can be rotated by rotate() method and
 * placed on the board with place() method.
 */
declare class Tile {
    description: string;
    orientation: number;
    location: Array<number>;
    constructor(description: string);
    place(): string;
}
export { Tile };
