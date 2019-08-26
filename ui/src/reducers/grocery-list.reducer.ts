import { IGroceryListState } from ".";
import { groceryListTypes } from "../actions/grocery-list.actions";

const initialState: IGroceryListState = {
    selectedList: {
        groceryListId: 0,
        name: '',
        description: ''
    }
}

export default (state = initialState, action: any): IGroceryListState => {
    switch (action.type) {
        case groceryListTypes.UPDATE_LIST:
            return {
                ...state,
                selectedList: action.payload
            }
        default:
            return state
    }
}
