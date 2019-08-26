import { combineReducers } from "redux";
import groceryListReducer from "./grocery-list.reducer";
import GroceryList from "../models/GroceryList";

export interface IGroceryListState {
    selectedList: GroceryList
}

// compose IState of all the other pieces of the state store
export interface IState {
    selectedList: IGroceryListState
}

export const state = combineReducers<IState>({
    selectedList: groceryListReducer
})