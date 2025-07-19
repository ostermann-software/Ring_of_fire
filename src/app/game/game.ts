import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gamevar } from "./../models/gamevar";
import { Player } from '../player/player';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayer } from '../dialog-add-player/dialog-add-player';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, Player, MatButtonModule, MatIconModule],
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class Game {

  dialog = inject(MatDialog);

  gamevar!: Gamevar;
  pickCardAnimation = false;
  currentCard: string = '';

  name: string = 'Anna';
  animal: string = 'Cat';

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayer, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal = result;
      }
    });
  }

}
