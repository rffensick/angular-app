import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputSearch = '';
  asyncTitle = Observable.of('asyncTitle 3 seconds').delay(3000);
  cars = [
    { name: 'Mazda' },
    { name: 'Ford' },
    { name: 'Benz' },
    { name: 'Tesla' },
    { name: 'Bently' }
  ];

  addCar() {
    this.cars.push({ name: 'New Car' });
  }
}
