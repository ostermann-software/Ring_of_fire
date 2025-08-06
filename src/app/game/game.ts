import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gamevar } from "./../models/gamevar";
import { Player } from '../player/player';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayer } from '../dialog-add-player/dialog-add-player';
import { GameInfo } from '../game-info/game-info';
import { Firestore, collection, collectionData, addDoc, getDocs, doc, docData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';


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


  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      const gameId = params['id'];
      console.log('ID: ', gameId);
      const gameDocRef = doc(this.firestore, 'games', gameId);
      docData(gameDocRef).subscribe((gameFirebase: any) => {
        console.log('Game update', gameFirebase);
        this.gamevar.currentPlayer = gameFirebase.currentPlayer;
        this.gamevar.stack = gameFirebase.stack;
        this.gamevar.players = gameFirebase.players;
        this.gamevar.playedCards = gameFirebase.playedCards;
      });
    });
  }


  newGame() {
    this.gamevar = new Gamevar();
    // addDoc(this.gamesCollection, this.gamevar.toJson());
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
        this.gamevar.currentPlayer += 1;
        if (this.gamevar.currentPlayer >= this.gamevar.players.length) {
          this.gamevar.currentPlayer = 0;
        }
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
      data: { name: this.name },
    });
    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.gamevar.players.push(result);
      }
    });
  }

}
