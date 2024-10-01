import { Component, inject } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, DeleteBook, EditBook, UpdateBook } from '../books/book.action';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    // Updated to select 'books' from the store, which should match your state slice
    this.books$ = this.store.pipe(select('books'));
  }

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ id, title, author }));
  }

  editBook(bookId: string, title: string, author: string) {
    this.store.dispatch(EditBook({ bookId, title, author }));
  }

  updateBook(bookId: string, book: Book) {
    this.store.dispatch(UpdateBook({ bookId, book }));
  }

  deleteBook(id: string) {
    this.store.dispatch(DeleteBook({ bookId: id }));
  }
}