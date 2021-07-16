declare class Tile {
    description: string;
    orientation: number;
    location: Array<number>;
    constructor(description: string);
    place(): string;
}
export { Tile };
