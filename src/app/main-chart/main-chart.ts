import { Component, type OnInit } from '@angular/core';
import { DbzApiService } from '../services/dbz-api.service';

@Component({
  selector: 'app-main-chart',
  imports: [],
  templateUrl: './main-chart.html',
  styleUrl: './main-chart.css',
  providers: [DbzApiService]
})
export class MainChart implements OnInit {
  constructor(private readonly dbzApiService: DbzApiService) { }

  ngOnInit(): void {
    this.dbzApiService.getSaiyanCharacters().subscribe((data) => {
      data.forEach((character) => {
        console.log("name: " + character.name + " // ki: " + character.ki);
      });
    });
  }
}
