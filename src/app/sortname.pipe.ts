import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname'
})
export class SortnamePipe implements PipeTransform {

  transform(value, book)  {
    if (value === undefined) {
      return book;
    }
    return value.sort((a, b) => {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      if (x > y) {
        return -1;
      } else  {
        return 1;
      }
      return 0;
    })
  }

}
