import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  cars = ['BMW', 'FORD', 'Audi'];
  items = [{ id: 1, name: 'Eduard' }, { id: 2, name: 'Vasya' }];
  carName = '';

  checkCar = false;

  addCar() {
    this.cars.push(this.carName);
    this.carName = '';
  }
}
