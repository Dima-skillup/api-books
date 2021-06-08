import { Component, OnInit} from '@angular/core';
import {ApiBooksService} from '../api-books.service';
import {BookClass} from '../book.class';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookList: BookClass[];
  selectedBook: number;
  searchStr: '';
  isPageValue =  false;
  constructor(public books: ApiBooksService) { }
  ngOnInit(): void {
    this.books.getData().subscribe((data:BookClass[]) => {
      this.bookList = data;
    });
  }


  selectBook(selectedBook) {
     this.selectedBook = selectedBook.id;
  }

  isSelected(id:number): boolean {
    return this.selectedBook === id ? true : false;
  }

sortName(value) {
  if (value === undefined) {
    return this.bookList;
  }
  return value.sort((a, b) => {
    let x = a.title;
    let y = b.title;
    if (x > y) {
      return -1;
    } else  {
      return 1;
    }
    return 0;
  })
}

  sortPage(){
    this.isPageValue ? this.ascendicPage() : this.descendicPage();
  }
  sortDate(){
    this.isPageValue ? this.ascendicDate() : this.descendicDate();
  }
  sortTitle(){
    this.isPageValue ? this.ascendicTitle : this.descendicTitle();
  }

  ascendicPage() {
    this.isPageValue = false;
    return this.bookList.sort((a, b) => {
      let x = a.pageCount;
      let y = b.pageCount;
      if (x > y) {
        return -1;
      } else  {
        return 1;
      }
      return 0;
    });


  }
  descendicPage(){
    this.isPageValue = true;
    return this.bookList.sort((a, b) => {
      let x = a.pageCount;
      let y = b.pageCount;
      if (x > y) {
        return 1;
      } else  {
        return -1;
      }
      return 0;
    });
  }
  ascendicTitle() {
    this.isPageValue = false;
    return this.bookList.sort((a, b) => {
      let x = a.title;
      let y = b.title;
      if (x > y) {
        return -1;
      } else  {
        return 1;
      }
      return 0;
    });


  }
  descendicTitle(){
    this.isPageValue = true;
    return this.bookList.sort((a, b) => {
      let x = a.title;
      let y = b.title;
      if (x > y) {
        return 1;
      } else  {
        return -1;
      }
      return 0;
    });
  }
  ascendicDate() {
    this.isPageValue = false;
    return this.bookList.sort((a, b) => {
      let x = a.publishDate;
      let y = b.publishDate;
      if (x > y) {
        return -1;
      } else  {
        return 1;
      }
      return 0;
    });


  }
  descendicDate(){
    this.isPageValue = true;
    return this.bookList.sort((a, b) => {
      let x = a.publishDate;
      let y = b.publishDate;
      if (x > y) {
        return 1;
      } else  {
        return -1;
      }
      return 0;
    });
  }

}
