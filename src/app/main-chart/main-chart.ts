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
    labels: [],
    datasets: [
      { data: [450, 500], label: 'Saiyans' },
    ],
  };
  constructor(private readonly dbzApiService: DbzApiService) { }

  ngOnInit(): void {
    this.dbzApiService.getSaiyanCharacters().subscribe((data) => {
      this.barChartData.labels = data.map(d => d.name);
      data.forEach((char) => {
        let num = parseInt(char.ki.replace(/\./g, ""), 10);
        console.log(num);
      });
      this.barChartData.datasets[0].data = data.map((char) => {
        let num = parseInt(char.ki.replace(/\./g, ""), 10);
        return num;
      });
      this.chart?.update();
    });
  }
}

