import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './dialog-add-player.html',
  styleUrl: './dialog-add-player.scss'
})
export class DialogAddPlayer {
  constructor(
    public dialogRef: MatDialogRef<DialogAddPlayer>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; animal: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

