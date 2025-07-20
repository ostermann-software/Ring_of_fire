import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.html',
  styleUrl: './player.scss'
})
export class Player {

  @Input() name!: string;
  @Input() playerActive!: boolean;

}
