import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BookReducer } from './app/books/book.reducer';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      books: BookReducer 
    }),
    provideRouter(routes)  
  ]
}).catch(err => console.error(err));
