import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  answers = [
    {
      type: 'yes',
      text: 'Да'
    },
    {
      type: 'no',
      text: 'Нет'
    }
  ];
}
