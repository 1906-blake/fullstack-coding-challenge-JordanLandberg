INSERT INTO grocery_list (grocery_list_name, grocery_list_description)
VALUES  ('Grocery List', 'Food Shopping Guide'),
        ('Electronics List', 'Electronics Buying Guide'),
        ('Video Games List', 'Video Games needed for fun'),
        ('Christmas List', 'Presents for the children');

INSERT INTO grocery_item (grocery_item_name, grocery_item_type, grocery_list_id)
VALUES  ('Eggs', 'Food', 1),
        ('Milk', 'Food', 1),
        ('Ham', 'Food', 1),
        ('PS4', 'Electronics', 2),
        ('Call of Duty: Modern Warfare 2', 'Electronics', 2),
        ('Bread', 'Food', 2),
        ('Sonic the Hedgehog', 'Electronics', 3),
        ('God of War', 'Electronics', 3),
        ('Eggnog', 'Food', 4),
        ('Milk', 'Food', 4),
        ('Water', 'Food', 4),
        ('4K TV', 'Electronics', 4),
        ('Disney World Tickets', 'Entertainment', 4),
        ('Plane Tickets', 'Travel', 4);
        