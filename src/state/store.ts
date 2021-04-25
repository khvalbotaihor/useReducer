import {createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";

export const store = createStore();
// @ts-ignore
window.store = store;
