import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSearch',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(carList: any[], searchSrt: string) {
    if (carList.length === 0 || searchSrt === '') {
      return carList;
    }

    return carList.filter(
      car =>
        car.name.toLowerCase().indexOf(searchSrt.toLowerCase().trim()) !== -1
    );
  }
}
