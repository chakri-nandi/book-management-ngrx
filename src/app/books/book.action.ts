import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

// Define the action for adding a new book
export const AddBook = createAction(
  '[Book] Add Book',
  props<{ id: string; title: string; author: string }>()
);

export const AddBookSuccess = createAction(
  '[Book] Book is Successfully Added',
  props<{ id: string; title: string; author: string }>()
);
  
export const AddBookFailure = createAction(
  '[Book] Add Book Failed',
  props<{error:any}>()
);

// Define the action for editing a book
export const EditBook = createAction(
  '[Book] Edit Book',
  props<{ bookId: string; title: string; author: string }>()
);

// Define the action for updating a book (by bookId)
export const UpdateBook = createAction(
  '[Book] Update Book',
  props<{ bookId: string; book: Book }>()
);

// Define the action for deleting a book (by bookId)
export const DeleteBook = createAction(
  '[Book] Delete Book',
  props<{ bookId: string }>()
);
