import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temp-project';

  constructor(private readonly router: Router) {

  }
  goToSimple() {
    this.router.navigate(['simple']);
  }

  goToMatGroup() {
    this.router.navigate(['mat-group']);
  }
}
