import Meeple from './meeple'

class Player {
    public points = 0

    public colour: string

    private _meeple: Meeple[]

    public get meeple(): Meeple[] {
        return this._meeple;
    }

    initMeeple(count: number): Meeple[] {

        const newMeeple: Meeple[] = []

        for (let i = 0; i < count; i++) {
            newMeeple.push(new Meeple())
        }
        return newMeeple
    }

    constructor(colour: string) {
        this._meeple = this.initMeeple(6)
        this.colour = colour
    }
}

export default Player
