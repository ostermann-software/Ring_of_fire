import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  imports: [MatCardModule],
  templateUrl: './game-info.html',
  styleUrl: './game-info.scss'
})
export class GameInfo implements OnChanges {
  cardAction = [
    {
      title: 'Waterfall',
      description: 'Alle müssen gleichzeitig anfangen zu trinken. Sobald Spieler 1 aufhört, darf Spieler 2 aufhören. Spieler 3 darf erst aufhören, wenn Spieler 2 aufhört – und so weiter.'
    },
    {
      title: 'You',
      description: 'Du entscheidest, wer trinken muss.'
    },
    {
      title: 'Me',
      description: 'Glückwunsch! Du musst einen Shot trinken!'
    },
    {
      title: 'Category',
      description: 'Denke dir eine Kategorie aus (z. B. Farben). Jeder Spieler muss ein passendes Beispiel nennen.'
    },
    {
      title: 'Bust a jive',
      description: 'Spieler 1 macht eine Tanzbewegung. Spieler 2 wiederholt sie und fügt eine neue hinzu. Und so weiter.'
    },
    {
      title: 'Chicks',
      description: 'Alle Frauen trinken.'
    },
    {
      title: 'Heaven',
      description: 'Hände hoch! Wer als Letzter reagiert, muss trinken!'
    },
    {
      title: 'Mate',
      description: 'Wähle einen Trink-Partner. Immer wenn einer von euch trinkt, muss der andere mittrinken.'
    },
    {
      title: 'Thumbmaster',
      description: 'Du bist der Daumenmeister. Irgendwann legst du unauffällig deinen Daumen auf den Tisch. Wer es zuletzt bemerkt und nachmacht, trinkt.'
    },
    {
      title: 'Men',
      description: 'Alle Männer trinken.'
    },
    {
      title: 'Quizmaster',
      description: 'Du bist der Quizmaster. Jeder, der auf deine Fragen antwortet, muss trinken – bis der nächste Quizmaster kommt.'
    },
    {
      title: 'Never have I ever...',
      description: 'Sage etwas, das du noch nie gemacht hast. Alle, die es schon gemacht haben, müssen trinken.'
    },
    {
      title: 'Rule',
      description: 'Erfinde eine neue Regel. Wer sie verletzt, muss trinken.'
    }
  ];


  titel: string = '';
  description: string = '';
  @Input() card!: string;

  ngOnChanges(): void {
    console.log('Current card:', this.card);
    let cardNumber = +this.card.split('_')[1] - 1;
    if (cardNumber >= 0) {
      this.titel = this.cardAction[cardNumber].title;
      this.description = this.cardAction[cardNumber].description;
      console.log('Titel:', this.titel, this.description);
    } else {
      this.titel = 'Spieler 1:';
      this.description = 'Ziehe eine Karte';
    }

  }
}
