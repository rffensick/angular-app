import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  ContentChild,
  OnInit,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input('carItem') car: { name: string; year: number };
  @Input() name: string;
  @ContentChild('carHeading') carHeading: ElementRef;
}
