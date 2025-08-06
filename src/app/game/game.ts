import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gamevar } from "./../models/gamevar";
import { Player } from '../player/player';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayer } from '../dialog-add-player/dialog-add-player';
import { GameInfo } from '../game-info/game-info';
import { Firestore, collection, collectionData , addDoc, getDocs } from '@angular/fire/firestore';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, Player, MatButtonModule, MatIconModule, GameInfo],
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class Game {

  dialog = inject(MatDialog);
  gamevar!: Gamevar;
  pickCardAnimation = false;
  currentCard: string = '';
  name: string = '';
  firestore = inject(Firestore);
  gamesCollection = collection(this.firestore, 'games');

  ngOnInit(): void {
    this.newGame();    
    collectionData(this.gamesCollection).subscribe((test) => {
      console.log('Game update', test);
    })
  }

  newGame() {
    this.gamevar = new Gamevar();
    addDoc(this.gamesCollection, this.gamevar.toJson());
  }

  takeCard() {
    // this.loadAllGames();
    if (!this.pickCardAnimation && this.gamevar.stack.length > 0) {
      this.currentCard = this.gamevar.stack.pop() || '';
      console.log('Karte: ', this.currentCard, this.gamevar);
      this.pickCardAnimation = true;
      this.gamevar.rotate.push(Math.random() * 360);
      this.gamevar.pos.push(Math.random() * 100);
      setTimeout(() => {
        this.pickCardAnimation = false;
        this.gamevar.playedCards.push(this.currentCard);
        this.gamevar.currentPlayer += 1;
        if (this.gamevar.currentPlayer >= this.gamevar.players.length) {
          this.gamevar.currentPlayer = 0;
        }
      }, 1500);
    }
  }


// async loadAllGames() {
//   const gamesCollection = collection(this.firestore, 'games');
//   const querySnapshot = await getDocs(gamesCollection);
//   querySnapshot.forEach((doc) => {
//     console.log(`Dokument-ID: ${doc.id}`, doc.data());
//   });
// }


  sort() {
    console.log('Ich sortiere!');
    for (let i = 0; i < this.gamevar.pos.length; i++) {
      this.gamevar.pos[i] = 0;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayer, {
      data: { name: this.name },
    });
    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.gamevar.players.push(result);
      }
    });
  }

}
