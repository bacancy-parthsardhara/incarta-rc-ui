import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Grinberg';

  month = 'January';
  year = ['', 2020.2, '2021', 2022];
}
