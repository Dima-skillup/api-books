import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(bookList, value)  {
    if (value === undefined) {
      return bookList;
    }
    return  bookList.filter(book => {
      return book.title.includes(value);
    });
  }

}
