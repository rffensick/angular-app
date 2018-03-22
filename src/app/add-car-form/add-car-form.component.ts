import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.scss']
})
export class AddCarFormComponent {
  carName: string;
  carYear: number;

  @Output() onAddCar = new EventEmitter<{ name: string; year: number }>();

  addCar() {
    this.onAddCar.emit({ name: this.carName, year: this.carYear });
  }
}
