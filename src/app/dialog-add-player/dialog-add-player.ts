import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  imports: [],
  templateUrl: './dialog-add-player.html',
  styleUrl: './dialog-add-player.scss'
})
export class DialogAddPlayer {
  public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data: { name: string; animal: string }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
