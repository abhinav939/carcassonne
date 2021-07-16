Place start tile
Player one places one tile adjacent to start tile (complexity: does player have to place a meeple? Can be placed on a city, road [or field])
Second player places adjacent tile (meeple placement optional?) (complexity - cannot place meeple on something that already has someone’s meeple - road or city)
Player places tile that completes road and then places meeple that gives points. Scoreboard goes up by x number of points
Player places city tile and completes city - scoreboard goes up. (complexity - player can complete someone else’s city)
So far the map is formed in the following way: each tile is connected by at least one edge
Tile can be connected via city, road or field
All edges of a tile have to correctly map to an edge of an adjacent tile, if there is an adjacent tile
City blocks combinations for creating cities of any size (given adjacent tiles match)
Shield icon on city doubles that tile’s points
Meeples in a city/road remain on the board until the city/road is completed
Monastery - takes one meeple, gives points based on how many adjacent and corner tiles exist - maximum points are 9 for the whole situation
Consider situation where 2 different meeples in a city/road because of missing tile that eventually gets filled in and connected
Only one meeple can be placed in one go by a player
(Mark which tiles end roads)


Plan:
Create main class for tile. That should contain the following restrictions: has to be placed next to existing tile, cannot be placed somewhere where a tile already exists, can be placed in 4 directions facing up, and that roads have to match to roads/cities to cities/farms to farms
Subtiles:
