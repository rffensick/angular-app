import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  items = [1, 2, 3, 4, 5];
  current = null;

  onClick(item: number) {
    this.current = item;
  }
}
