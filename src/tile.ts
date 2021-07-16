class Tile {

    description: string
    orientation: number = 0
    location: Array<number> = [0, 0]

    constructor(description: string) {
        this.description = description
    }
    // Any number of methods:
    place(): string {
        return `Hi! I am ${this.description} and ${this.orientation}.`
    }
}

export { Tile }
