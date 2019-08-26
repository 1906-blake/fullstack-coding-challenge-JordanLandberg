DROP TABLE grocery_item;
DROP TABLE grocery_list;

CREATE TABLE grocery_list (
    grocery_list_id SERIAL PRIMARY KEY,
    grocery_list_name TEXT NOT NULL,
    grocery_list_description TEXT NOT NULL
);

CREATE TABLE grocery_item (
    grocery_item_id SERIAL PRIMARY KEY,
    grocery_item_name TEXT NOT NULL,
    grocery_item_type TEXT NOT NULL,
    grocery_list_id INTEGER NOT NULL REFERENCES grocery_list(grocery_list_id)
);