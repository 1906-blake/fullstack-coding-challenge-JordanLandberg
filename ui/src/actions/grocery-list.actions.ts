import GroceryList from "../models/GroceryList";

export const groceryListTypes = {
    UPDATE_LIST: '[LIST] UPDATE SELECTED LIST'
}

export const updateSelectedList = (selectedList: GroceryList) => async (dispatch: any) => {

        dispatch({
            type: groceryListTypes.UPDATE_LIST,
            payload: selectedList
        })
}
