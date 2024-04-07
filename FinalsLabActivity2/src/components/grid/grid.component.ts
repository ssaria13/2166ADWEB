import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  cutestidol: string = '';
  idols: string[] = ['Wonhee', 'Haerin', 'Sunoo', 'Harua'];

  constructor(private snackBar: MatSnackBar) { }

  showSnackbar() {
    if (this.cutestidol) {
      this.snackBar.open(`Cutest idol is ${this.cutestidol}`, 'Close', {
        duration: 3000, // Duration in milliseconds
        panelClass: ['snackbar-background']
      });
    }
  }
}