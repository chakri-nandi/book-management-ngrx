import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
    {path: '', redirectTo: '/books', pathMatch: 'full'}, // redirect to books page on root url
    {path:'books',title: 'Books',component:BookListComponent}
];
