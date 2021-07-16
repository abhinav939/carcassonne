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
/** The starting stack of 72 land tiles in the base game (including one with a dark reverse)
 *  which depict road, city and farm segments, as well as cloisters.
*/
declare const BaseTiles: TileSet;
export { TileSet, BaseTiles };
