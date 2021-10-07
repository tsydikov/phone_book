import { CREATE, DELETE } from "./types";

export const addItem = (item) => ({ type: CREATE, payload: item });
export const deleteItem = (id) => ({ type: DELETE, payload: id });
export const updateItem = (item) => ({ type: CREATE, payload: item });