import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  addCarStatus = '';
  inputText = '';

  addCar() {
    this.addCarStatus = 'Машина Добалена';
  }

  onKeyUp(e: Event) {
    console.log(e);
    this.inputText = (<HTMLInputElement>e.target).value;
  }
}
