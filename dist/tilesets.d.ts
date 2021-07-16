interface Tile {
    description: string;
    joined?: boolean;
    shields?: number;
}
interface TileDistribution {
    tile: Tile;
    count: number;
}
interface TileSet extends Array<TileDistribution> {
}
declare const BaseTiles: TileSet;
export { TileSet, BaseTiles };
