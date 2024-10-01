import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './models/book';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'books';

  books$: Observable<ReadonlyArray<Book>>;

  constructor(private store: Store<{ books: ReadonlyArray<Book> }>) {
    // Select the books from the store
    this.books$ = store.select('books');
  }
}