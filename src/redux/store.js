import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice'; // Verify this path

export default configureStore({
  reducer: {
    books: booksReducer
  }
});