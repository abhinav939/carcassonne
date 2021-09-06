import Meeple from './meeple'

class Player {
    public points = 0

    public colour = ""

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

    constructor() {
        this._meeple = this.initMeeple(6)
    }
}

export default Player
