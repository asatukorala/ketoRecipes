CREATE DATABASE keto_recipes;
\c keto_recipes

CREATE TABLE recipes(
  id SERIAL PRIMARY KEY,
  name TEXT,
  img TEXT,
  flavour TEXT,
  ingredients TEXT,
  cooking_method TEXT
);

INSERT INTO recipes(name, img, flavour, ingredients, cooking_method)
VALUES
  ('Crack Keto Biscuits', 'https://images.unsplash.com/photo-1590671886400-8f8088b97cb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MjYzOTY0MDh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'sweet', '4 oz cream cheese
2 cups shredded mozzarella cheese
2 tsp baking powder
3 eggs
1 (1-oz) packet dry Ranch dressing mix
1&1/2 cups superfine almond flour
1 cup shredded cheddar cheese
1/2 cup chopped cooked bacon', 'Preheat oven to 400ºF.
In a microwave-safe bowl, microwave cream cheese, and mozzarella cheese on HIGH for 1 minute. Stir until smooth.
Add baking powder, eggs, ranch mix, and almond flour to cream cheese mixture. Stir well.
Stir in cheddar cheese and bacon. Stir until combined.
Spray a 10-inch iron skillet with cooking spray. Divide the dough into 11 or 12 balls and place in skillet. Place skillet in the refrigerator for 10 minutes.
Remove skillet from the refrigerator and bake for 20 to 25 minutes. Brush cooked biscuits with melted butter and sprinkle with dried parsley, if desired.');

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);