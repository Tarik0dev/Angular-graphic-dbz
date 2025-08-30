import { Component, ViewChild, type OnInit } from '@angular/core';
import { DbzApiService } from '../services/dbz-api.service';
import { BaseChartDirective } from 'ng2-charts';
import type { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-main-chart',
  imports: [BaseChartDirective],
  templateUrl: './main-chart.html',
  styleUrl: './main-chart.css',
  providers: [DbzApiService]
})
export class MainChart implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective<'bar'>;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { x: {}, y: { min: 10 } },
    plugins: { legend: { display: true } },
  };

  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ],
  };
  constructor(private readonly dbzApiService: DbzApiService) { }

  ngOnInit(): void {
    this.dbzApiService.getSaiyanCharacters().subscribe((data) => {
      data.forEach((character) => {
        console.log("name: " + character.name + " // ki: " + character.ki);
      });
    });
  }
}

