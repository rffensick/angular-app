import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  carYear = 2015;
  cars = ['BMW', 'FORD', 'Audi'];

  carName = '';
  checkCar = false;

  addCar() {
    this.checkCar = !this.checkCar;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
