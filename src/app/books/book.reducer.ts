import { createReducer, on } from "@ngrx/store";
import { AddBook, EditBook, UpdateBook, DeleteBook, AddBookSuccess, AddBookFailure } from "./book.action";
import { Book } from "../models/book";

// Initial state is an empty array of books
export const initialState:Book[] = [];

// Reducer function to handle different actions
export const BookReducer = createReducer(
  initialState,
  
  on(AddBook, (state, { id, title, author }) => [...state,{ id, title, author }]),
  on(AddBookSuccess, (state, { id, title, author }) =>[...state,{ id, title, author }]),
  on(AddBookFailure, (state, { error }) =>{ 
    console.log(error); 
    return state;
  }),

  on(DeleteBook, (state, { bookId }) => state.filter(book => book.id !== bookId)),

  on(EditBook, (state, { bookId, title, author }) =>
    state.map(book => (book.id === bookId ? {...book,title,author } : book))
  ),

  on(UpdateBook, (state, { bookId, book }) =>
    state.map(b => (b.id === bookId ? book : b))
  )
);
