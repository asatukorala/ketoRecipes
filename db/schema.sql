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
Remove skillet from the refrigerator and bake for 20 to 25 minutes. Brush cooked biscuits with melted butter and sprinkle with dried parsley, if desired.'),
('Keto fat bomb', 'https://images.unsplash.com/photo-1503153888445-cd465dba5c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnV0JTIwY2x1c3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60%3E', '1 cup macadamia nuts 1 cup pecan or walnut halves ½ cup pepitas ½ cup pistachios 1 cup dark chocolate sugar-free chocolate chips 1 ½ tablespoon coconut oil Flaky sea salt for sprinkling', 'In a cast-iron skillet, place the coconut oil and the chocolate chips over low heat. Stir constantly until it gets melted. Put nuts and seeds, once melted. Stir to combine. Place about 2 tbsp. worth of the mixture by using a spoon into mounds on the parchment-lined baking sheet. If desired, use flaky sea salt to sprinkle. Now put the baking sheet to the freezer and freeze for 60 minutes. Put the clusters to a lidded freezer-safe container, once set. Store for up to one month.'),
('Chicken Cheese Balls', 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjBiYWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60%3E', '8 oz cream cheese, softened 1 teaspoon chives (or 1 green onion), finely chopped One jalapeno, finely chopped. 1 1/2 cup cooked chopped chicken 5 pieces bacon, cooked and crumbled 4 tablespoons hot sauce 1/2 cup cheddar cheese', 'Firstly, you have to clean the jalapeno pepper by removing the seeds. 2. Take a bowl and add jalapeno pepper cream cheese, cheddar, hot sauce and cooked chicken and mix well till well combined. 3. With the help of your hands make a ball of this mixture and roll it into the bacon crumbles. 4. Refrigerate it for one hour or more till it is set well. 5. You can serve it with raw low carb veggies.'), ('Cheddar biscuits', 'https://images.unsplash.com/photo-1542082894-fbdea8cb0edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlJTIwYmlzY3VpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60%3E', '1 cup shredded cheddar cheese - 1.5 cup almond flour - 4 Tbsp of melted butter - 1 tsp baking powder - 4 eggs (+ optional 1 tsp salt or garlic salt)', 'Mix it all together and bake at 400° for 12-15 min or until golden brown. This recipe yielded 9 for us: approx 2.5 net carbs each');

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);