import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars = [
    {
      name: 'Ford',
      isSolid: true
    },
    {
      name: 'Mazda',
      isSolid: true
    },
    {
      name: 'BWM',
      isSolid: true
    }
  ];

  addCarToList(name: string) {
    this.cars.push({
      name,
      isSolid: true
    });
  }
}
