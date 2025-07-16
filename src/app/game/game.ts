import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gamevar } from "./../models/gamevar";
import { Player } from '../player/player';

@Component({
  selector: 'app-game',
  imports: [CommonModule, Player],
  templateUrl: './game.html',
  styleUrl: './game.scss'
})

export class Game {

  gamevar!: Gamevar;
  pickCardAnimation = false;
  currentCard: string = '';


  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.gamevar = new Gamevar();
  }

  takeCard() {
    if (!this.pickCardAnimation && this.gamevar.stack.length > 0) {
      this.currentCard = this.gamevar.stack.pop() || '';
      console.log('Karte: ', this.currentCard, this.gamevar);
      this.pickCardAnimation = true;
      this.gamevar.rotate.push(Math.random() * 360);
      this.gamevar.pos.push(Math.random() * 100);

      setTimeout(() => {
        this.pickCardAnimation = false;
        this.gamevar.playedCards.push(this.currentCard);
      }, 1500);
    }
  }

  sort() {
    console.log('Ich sortiere!');
    for (let i = 0; i < this.gamevar.pos.length; i++) {
      this.gamevar.pos[i] = 0;
    }
  }

  

}
