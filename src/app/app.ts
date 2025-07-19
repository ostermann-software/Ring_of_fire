import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Ring_of_fire';
}
