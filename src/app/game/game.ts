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


  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.gamevar = new Gamevar();
    console.log(this.gamevar);
  }




  takeCard() {
    console.log('Karte!');
    this.pickCardAnimation = true;
  }


}
