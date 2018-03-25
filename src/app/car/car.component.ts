import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car;

  getClass() {
    return {
      'list-group-item-success': this.car.isSolid,
      'list-group-item-danger': !this.car.isSolid,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.car.isSolid = type === 'buy' ? false : true;
  }
}
