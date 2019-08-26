import GroceryList from "./GroceryList";

export default class User {

    constructor(
        public groceryItemId = 0,
        public groceryItemName = '',
        public groceryItemType = '',
        public groceryList = new GroceryList
    ) {}
}