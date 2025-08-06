import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData, addDoc, getDocs, doc, docData } from '@angular/fire/firestore';
import { Gamevar } from "./../models/gamevar";

@Component({
  selector: 'app-start-screen',
  imports: [],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.scss'
})
export class StartScreen {

  router = inject(Router);
  firestore = inject(Firestore);
  gamesCollection = collection(this.firestore, 'games');

  newGame() {
    console.log('Start Game!');
    let gamevar = new Gamevar();
    addDoc(this.gamesCollection, gamevar.toJson())
      .then((gameInfo: any) => {
        console.log(gameInfo);
        this.router.navigate(['/game/' + gameInfo.id]);
      });
  }

}
