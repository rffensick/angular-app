import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  cars = [
    {
      name: 'Mazda',
      year: 2015
    },
    {
      name: 'BMW',
      year: 2000
    },
    {
      name: 'Audi',
      year: 2017
    }
  ];

  updateCarList(car: { name: string; year: number }) {
    this.cars.push(car);
  }

  updateCar() {
    return (this.cars[0].name = 'Eduard');
  }

  deleteCar() {
    return this.cars.splice(0, 1);
  }
}
