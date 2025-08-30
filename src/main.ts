import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { Chart as ChartJS, registerables } from 'chart.js';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

ChartJS.register(...registerables);
