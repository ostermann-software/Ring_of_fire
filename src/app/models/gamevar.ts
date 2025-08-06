export class Gamevar {
    public players: string[] = ['Anton', 'Josef', 'Chris'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public rotate: number[] = [];
    public pos: number[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('kreuz_' + i);
            this.stack.push('pik_' + i);
            this.stack.push('herz_' + i);
            this.stack.push('karo_' + i);
        }
        shuffle(this.stack);
    }

    public toJson() {
        return {
            players: this.players,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            rotate: this.rotate,
            pos: this.pos,
        }
    }
}


export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
};

