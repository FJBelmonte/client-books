import books from "../apis/books";
import {
  CREATE_BOOK,
  EDIT_BOOK,
  DELETE_BOOK,
  FETCH_BOOK,
  FETCH_BOOKS
} from "./types";

import history from "../history";

export const createBook = formValues => async (dispatch, getState) => {
  const response = await books.post("/books", { ...formValues });

  dispatch({ type: CREATE_BOOK, payload: response.data });

  history.push("/");
};

export const fetchBooks = () => async dispatch => {
  const response = await books.get("/books");
  dispatch({ type: FETCH_BOOKS, payload: response.data });
};
export const fetchBook = id => async dispatch => {
  const response = await books.get(`/books/${id}`);
  dispatch({ type: FETCH_BOOK, payload: response.data });
};

export const editBook = (id, formValues) => async dispatch => {
  const response = await books.patch(`/books/${id}`, formValues);
  dispatch({ type: EDIT_BOOK, payload: response.data });
  history.push("/");
};

export const deleteBook = id => async dispatch => {
  await books.delete(`/books/${id}`);
  dispatch({ type: DELETE_BOOK, payload: id });
  history.push("/");
};
