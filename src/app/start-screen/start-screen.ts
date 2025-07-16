import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  imports: [],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.scss'
})
export class StartScreen {

  router = inject(Router);

  newGame() {
    console.log('Start Game!');
    this.router.navigate(['/game']);
  }

}
