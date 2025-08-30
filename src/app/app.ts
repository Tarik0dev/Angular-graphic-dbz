import { Component, signal } from '@angular/core';
import { MainChart } from "./main-chart/main-chart";

@Component({
  selector: 'app-root',
  imports: [MainChart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('graphic-dbz-angular');
}
