import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gamevar } from "./../models/gamevar";

@Component({
  selector: 'app-game',
  imports: [CommonModule],
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
    // console.log(this.gamevar);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.gamevar.stack.pop() || '';
      console.log('Karte: ', this.currentCard, 'Stack:', this.gamevar.stack);
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 3000);
    }

  }

}
