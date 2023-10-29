const data = [
  {
    category: 'BREAKFAST',
    item: 'Silver Star House Special Breakfast',
    description:
      'Two farm fresh eggs cooked on your choice, maxim potatoes, grilled tomatoes, liver, toast, tea or coffee and a glass of juice',
    price: 10,
  },
  {
    category: 'BREAKFAST',
    item: 'Norwegian Breakfast',
    description:
      'Two eggs cooked on your choice, two pancakes, baked beans, tea or coffee and a glass of juice',
    price: 10,
  },
  {
    category: 'BREAKFAST',
    item: 'Spanish omelet with baked beans',
    price: 5,
  },
  {
    category: 'BREAKFAST',
    item: 'Liver (beer) ',
    description: 'Served with angeera or bread',
    price: 5,
  },
  {
    category: 'BREAKFAST',
    item: 'Sookar ',
    description: 'Served with angeera or bread',
    price: 5,
  },
  {
    category: 'BREAKFAST',
    item: 'Pumpkin oats',
    description: 'Pumpkin puree boiled with whole oats',
    price: 3,
  },
  {
    category: 'BREAKFAST',
    item: 'Plain oat porridge',
    description: 'Wwhole healthy oats boiled with milk',
    price: 2,
  },
  {
    category: 'BREAKFAST',
    item: 'Pancakes',
    description:
      '(plain, chocolate, caramel) American served with fruits and cream',
    price: 3,
  },
  {
    category: 'BREAKFAST',
    item: 'Home fries heaven',
    description:
      'Large serving of home fries topped with cheese, guacamole and salsa',
    price: 4,
  },
  {
    category: 'BREAKFAST',
    item: 'Huevos rancheros ',
    description:
      'Tortilla topped with two eggs, spicy ranchero sauce and melted cheese, served with baked beans home fries guacamole and salsa',
    price: 5,
  },
  {
    category: 'BREAKFAST',
    item: 'Grilled steak / chicken and egg',
    description: 'Served with lyonnaise potatoes and toast',
    price: 6,
  },
  {
    category: 'SIDES',
    item: 'Sour cream, One egg, Toast, Guacamole',
    price: 1,
  },
  {
    category: 'SIDES',
    item: 'Salsa',
    price: 1,
  },
  {
    category: 'SIDES',
    item: 'Jalapenos',
    price: 1,
  },
  {
    category: 'SIDES',
    item: 'Home fries',
    price: 1,
  },
  {
    category: 'SIDES',
    item: 'Sausage (two)',
    price: 1,
  },
  {
    category: 'SIDES',
    item: 'Beef bacon',
    price: 1,
  },
  {
    category: 'SIDES',
    item: 'Strawberries',
    price: 1,
  },
  {
    category: 'SIDES',
    item: 'Whipped cream',
    price: 1,
  },
  {
    category: 'SOUPS',
    item: 'Spinach soup ',
    description: 'Puree of spinach soup finished with cream',
    price: 3,
  },
  {
    category: 'SOUPS',
    item: 'Cream of mushroom soup',
    description: 'Savory cream of mushroom soup served with a burn',
    price: 5,
  },
  {
    category: 'SOUPS',
    item: 'Cream of butternut soup',
    price: 5,
  },
  {
    category: 'SOUPS',
    item: 'Mutton soup ',
    description: 'Mutton broth served with a burn',
    price: 5,
  },
  {
    category: 'SALADS',
    item: 'Classic salads ',
    description:
      'Choice of dressing including vinaigrette, Thai salad dressing, creamy garlic or thousand islands',
    price: 5,
  },
  {
    category: 'SALADS',
    item: 'Greek island salad ',
    description:
      'Fetta cheese tomatoes, onion, green pepper, cucumber, lettuce vinaigrette sauce',
    price: 5,
  },
  {
    category: 'SALADS',
    item: 'Fresh garden salad',
    description:
      'Assorted farm fresh salad vegetables with bread and salad dressing, ',
    price: 6,
  },
  {
    category: 'SALADS',
    item: 'Chicken Caesar salad',
    description:
      'Lettuce crispy chicken flanks, green pepper, tomato, chicken, parmesan shavings and croutons',
    price: 6,
  },
  {
    category: 'SALADS',
    item: 'Insalata de’ mare ',
    description:
      'Seafood salad with lobster, shrimps, calamari, octopus, lettuce cucumber, tomato, onion, grapefruit, cilantro, lime and capers',
    price: 10,
  },
  {
    category: 'SALADS',
    item: 'Silver Star special Cobb salad',
    description:
      'Sweetcorn, mixed green leaves, boiled eggs, black olives, avocado, chicken flanks, and beetroot',
    price: 8,
  },
  {
    category: 'SALADS',
    item: 'Chicken salad ',
    description:
      'Chicken mayonnaise onion, tomatoes, lettuce, celery, cucumber',
    price: 6,
    image: '1I6A9821.JPG',
  },
  {
    category: 'SALADS',
    item: 'Tuna salad',
    description:
      'Tuna fillet, onion, lettuce, tomatoes, cucumber, cocktail sauce',
    price: 6,
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Chicken quesadilla ',
    description:
      'Braised chicken with jalapeno, onion, green pepper and Mexican spices in tortilla',
    price: 6,
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Masala chips',
    description:
      'Aromatic crispy chips, toasted in creamy curry sauce with fresh cilantro',
    price: 3,
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Giant meat or fish samosa. 3 pcs ',
    price: 5,
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Fish fingers. And chips ',
    description: 'Served with salad and tartar sauce',
    price: 10,
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Buffalo chicken wings ',
    description:
      'Marinated bread crumbed chicken wings, served with salad and chips',
    price: 5,
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Buffalo chicken wings ',
    description:
      'Marinated bread crumbed chicken wings, served with salad and chips',
    price: 5,
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Shuwarma Arabia ',
    price: 5,
    image: 'Copy of DSC09526.JPG',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Philadelphia',
    description: 'Meat, Chicken or Fish',
    price: 6,
    image: 'Copy of DSC09512.JPG',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Fajita chicken',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Scallop',
    description: 'Fish or Chicken',
    price: 6,
    image: 'Copy of DSC09540.JPG',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Crispy chicken',
    price: 6,
    image: 'Copy of DSC09544.JPG',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Chicken popcorn',
    price: 6,
    image: 'Copy of DSC09523.JPG',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Humus',
    price: 2,
    image: 'Copy of DSC09549.JPG',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Farafil',
    price: 4,
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Manaqish  1 PC ',
    description: 'Za’tar cheese',
    price: 2,
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Arabian grilled fish',
    price: 8,
  },
  {
    category: 'I LOVE PASTA',
    item: 'Pasta al forno (béchamel) ',
    description:
      'Oven cooked pasta with beef Bolognese sauce, béchamel and gratinated cheese',
    price: 10,
  },
  {
    category: 'I LOVE PASTA',
    item: 'Penne alfredo ',
    description: 'Penne pasta in creamy mushroom sauce, chicken and garlic',
    price: 10,
    image: 'Copy of DSC09482.JPG',
  },
  {
    category: 'I LOVE PASTA',
    item: 'Fruiti de’ mare',
    description:
      'Linguine pasta in mixed seafood of lobster, shrimps calamari and fish, with a touch of chilli',
    price: 12,
  },
  {
    category: 'I LOVE PASTA',
    item: 'Spaghetti bolognaise ',
    description:
      'Linguine pasta in flavored beef sauce mozzarella and parmesan shavings',
    price: 10,
    image: '1I6A9846.JPG',
  },
  {
    category: 'I LOVE PASTA',
    item: 'Pasta',
    price: 2,
    image: 'Copy of DSC09565.JPG',
  },
  {
    category: 'I LOVE PASTA',
    item: 'Spinach ricotta lasagna ',
    description: 'Spinach, ricotta cheese, mozzarella, parmesan',
    price: 10,
  },
  {
    category: 'I LOVE PASTA',
    item: 'Beef lasagna',
    price: 10,
    image: 'Copy of DSC09508.JPG',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Grilled Chicken',
    description:
      'Herb marinated chicken breast, served with vegetables and accompaniments of your choice',
    price: 12,
    image: '1I6A9839.JPG',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Schnitzel al Florentine ',
    description:
      'Crispy bread crumbed chicken, served with spinach and pepper sauce and an accompaniment of your choice',
    price: 12,
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Swahili coconut fish ',
    description:
      'Braised fish in coconut and ginger mild spices with an accompaniment of your choice',
    price: 12,
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Grilled fish',
    description:
      'herb marinated fish fillets served with the accompaniments of your choice and fresh slad tartare sauce',
    price: 12,
    image: '1I6A9843.JPG',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Grilled cod ',
    description:
      'Grilled cod fish with onions, tomatoes, black olives, green pepper emulsion on a potato, lettuce pumpkin and feta cheese salad',
    price: 12,
    image: '1I6A9834.JPG',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Rice',
    price: 2,
    image: 'Copy of DSC09563.JPG',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Mixed sea food platter. ',
    description:
      'Platter of assorted lobster, shrimps, prawns, calamari, fish and octopus on a bed of grilled Mediterranean vegetables and mashed potatoes with a savory sauce',
    price: 30,
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Lobster thermidor ',
    description: 'Stuffed rock lobster with mushroom and savory spinach',
    price: 20,
    image: '1I6A9852.JPG',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Braised dhyllo ',
    description:
      'Braised baby goat with cadamom and cinnamon infused herbs served with an accompaniment of your choice',
    price: 12,
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Grilled prime of beef fillet ',
    description:
      'Rubbed beef fillet with secret spices grilled to perfection and served with creamy pepper sauce, vegetables and accompaniments of your choice',
    price: 12,
    image: '1I6A9827.JPG',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Sizzling beef/chicken or fish. ',
    description: 'With vegetables and served with accompaniment of your choice',
    price: 12,
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Silver Star special meat platter ',
    description:
      'A platter of assorted meat, fish, and chicken, on a bed of grilled vegetables and an accompaniment of your choice',
    price: 20,
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Dheylo',
    price: 10,
    image: 'Copy of DSC09483.JPG',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Australian burger ',
    description:
      'Grilled chicken, beetroot, pineapple, lettuce, tomatoes, and cheddar cheese',
    price: 7,
    image: 'Copy of DSC09529.JPG',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Mexican tex. Burger',
    description:
      'Barbeque chicken, pico de’ gallo, jalapeno, lettuce and grilled pineapple',
    price: 7,
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Delux jumbo burger ',
    description:
      'Grilled steak, lettuce, tomato, fried egg, and cheddar cheese',
    price: 7,
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Grilled beef and mushroom burger ',
    description:
      'Grilled pepper steak, lettuce, tomato, onion, savory mushrooms, and cheddar cheese',
    price: 7,
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Philadelphia cheese steak sandwich with chips',
    description:
      'Fajita beef, cream cheese and cheddar cheese on ciabatta crostini',
    price: 6,
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Tuna melt sub. With chips ',
    description: 'Savory tuna with mayo, green pepper, onion',
    price: 7,
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Chicken mayo sandwich with chips ',
    description: 'Savory chicken with mayonnaise, celery, onion and lettuce',
    price: 6,
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Silver Star special club sandwich with chips ',
    description:
      'Double decker chicken, meat, eggs, onion, tomato, lettuce and cheddar cheese',
    price: 8,
  },
  {
    category: 'PIZZA MENU:',
    item: 'Large Pizza ',
    price: 15,
  },
  {
    category: 'PIZZA MENU:',
    item: 'MediumPizza ',
    price: 12,
  },
  {
    category: 'PIZZA MENU:',
    item: 'Small Pizza ',
    price: 8,
  },
  {
    category: 'PIZZA MENU:',
    item: 'Extra cheese ',
    price: 1,
  },
  {
    category: 'PIZZA MENU:',
    item: 'Pizza magharita bassilico large',
    description:
      'Tomato, provencale sauce, diced pineapple, sweetcorn, beef pepperoni, mozzarella cheese',
    size: 'L-15, M-12, S-8',
    price: 15,
  },
  {
    category: 'PIZZA MENU:',
    item: 'Hawaiian pizza Large',
    description:
      'Provencale sauce, diced pineapple, sweetcorn, beef pepperoni, mozzarella cheese',
    size: 'L-15, M-12, S-8',
    price: 15,
  },
  {
    category: 'PIZZA MENU:',
    item: 'Vegetarian pizza ',
    description:
      'Provencale sauce, artichoke, sliced onion, sliced mushrooms, fresh diced tomatoes, spinach, zucchini, fresh diced green pepper, black olives mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'PIZZA MENU:',
    item: 'Four seasons pizza ',
    description:
      'Provencale sauce, sliced onions, fresh diced green pepper, sliced mushrooms, pepperoni, fresh diced tomatoes, and mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'PIZZA MENU:',
    item: 'Chicken barbeque pizza ',
    description:
      'Provencale sauce, sliced onions, sliced mushrooms, diced chicken, sweet barbeque sauce and mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'PIZZA MENU:',
    item: 'Chicken mushroom pizza',
    description:
      'Provencale sauce, sliced onions, sliced mushrooms, diced chicken, sweet barbeque sauce and mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'PIZZA MENU:',
    item: 'Sweet and sour chicken',
    description:
      'Provencale sauce, diced chicken diced pineapple, fresh diced green pepper sweet n’ sour sauce, mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'PIZZA MENU:',
    item: 'Club pizza',
    description:
      'Provencale sauce, diced chicken, ground beef, gravey rave sauce, mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'PIZZA MENU:',
    item: 'Something meaty pizza',
    description:
      'Provencale sauce, pepperoni slices, diced tomatoes, green pepper, black olives, mozzarella cheese',
  },
  {
    category: 'PIZZA MENU:',
    item: 'Calzone pizza  (fold over)',
    description:
      'Cream cheese, sliced onions, sliced mushrooms, pepperoni slices, diced tomatoes, green pepper, black olives, mozzarella cheese',
    size: 'Only Large',
    price: 15,
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Biryani Chicken',
    description:
      'Fresh chicken and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
    price: 10,
    image: 'Copy of DSC09435.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Biryani Fish',
    description:
      'Fresh Fish and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
    price: 10,
    image: 'Copy of DSC09435.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Biryani Meat',
    description:
      'Fresh Meat and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
    price: 10,
    image: 'Copy of DSC09435.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Banjara Tika',
    price: 8,
    image: 'Copy of DSC09368.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Fish Tikka',
    price: 8,
    image: 'Copy of DSC09391.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Malai chicken tikka / fish',
    description:
      'Marinate the chicken thighs in ginger garlic paste, yogurt and grated cheese, cashew paste, cream, salt, pepper smoky sharp flavor… Mixed Tanduri platar Smoll Platter consisting of four types of mixed kebabs including two pess banjara kebabs , two malai.chicken tikka, two fish tikka and one peri peri. Legs',
    price: 8,
    image: 'Copy of DSC09391.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Silver special tandoori Platter',
    description:
      'Plater consisting of six types of mixed kebabs including two banjara kebabs,and two malai tikka , two fish tikka, Two Peri Peri Chicken Tikka, Two Mutton Kebab and ,Two Piece Kalmi Kebab Legs…all time your favorite',
    price: 20,
    image: 'Copy of DSC09382.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Chicken /fish curry',
    description:
      'Made by simmering chicken in fresh ground indian spice powder and onion Tamato gravy delicious taste garnish green coriander.and fresh cooking cream',
    price: 8,
    image: 'Copy of DSC09416.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Butter chicken',
    description:
      'Marinated chicken is grilled in a tandoor simmered in a rich creamy and butter tomato gravy all time favorite',
    price: 8,
    image: 'Copy of DSC09405.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Reshmi kabab',
    price: 10,
    image: 'Copy of DSC09400.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Butter chicken',
    price: 8,
    image: 'Copy of DSC09405.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Chicken kadai / fish',
    description:
      'Spicy tomato masala sauce made with julienne Red Green Yellow Capsicum onion Cumin Coriander Seeds Red Chilli freshly ground spices”spicy dish and is traditionally made in a cast iron wok',
    price: 8,
    image: 'Copy of DSC09425.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Chicken, Mutton, Fish biryani',
    description:
      'Fresh chicken and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
    price: 10,
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Egg fried rice',
    description:
      'Cooked basmati rice, and mix egg, vegetable and tossed with all chinese souce',
    price: 4,
    image: 'Copy of DSC09489.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Chicken Chili',
    description:
      'Finger cut frish chicken and marinated with deep fried and cooked with garlic, capcicum, onion and tossed with chinese souce',
    price: 6,
    image: 'Copy of DSC09395.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Garlic nan',
    description:
      'White flour stuffed garlic and green coriander on a traditional flat bread from India. Normally baked inside hot Tandoor ovens with charcoal or wood fire',
    price: 1.5,
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Butter nan',
    description:
      'White flour stuffed black white sesame and green coriander on a traditional flat bread from India. Normally baked inside hot Tandoor ovens with charcoal or wood fire',
    price: 1.5,
    image: 'Copy of DSC09462.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Tanduri bread',
    description:
      'Flat breads made with whole wheat flour and cooked in a tandoor, a clay oven',
    price: 1.5,
    image: 'Copy of DSC09451.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Tanduri plater',
    price: 10,
    image: 'Copy of DSC09389.JPG',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Indian chapati',
    description:
      'Flour mixed salt and sugar Triangle shaped flatbread made from wheat flour and cooked in a pan',
    price: 1,
    image: 'Copy of DSC09451.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Vanilla cake (eggs)',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Plain croissant. (eggs)',
    price: 2,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Cinnamon $ raisin roll.',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Chocolate croissant.',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Almond croissant.',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Assorted cookies.',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Black forest gateau (egg)',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'White forest gateau. (egg)',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Oreo cheese cake',
    price: 4,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Lotus cheese cake',
    price: 4,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Tiramisu cheese cake.',
    price: 4,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Date cake eggless.',
    price: 4,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Strawberry cake (eggless)',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Marble cake.(eggs)',
    price: 4,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Fruit cake.',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Black magic',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Cup cakes – vanilla, chocolate, strawbwrry.',
    price: 1.5,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Swiss roll.',
    price: 3,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Apple pie',
    price: 4,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Chicken pie',
    price: 5,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Sweet corn cheese pie',
    price: 4,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Small doughnuts',
    price: 1,
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Big doughnuts',
    price: 2,
  },
]

export const getItems = () => {
  return data.map((item) => ({
    ...item,
    size: item?.size || null,
    image: item?.image
      ? `https://farshaxan.blr1.cdn.digitaloceanspaces.com/silver/${item.image}`
      : null,
  }))
}

export const getCategories = () => {
  return getItems().map((item) => item.category)
}

export const getItemsByCategory = (category: string) => {
  return getItems().filter(
    (item) => item.category.toLowerCase() === category.toLowerCase(),
  )
}

export const groupItemsByCategory = () => {
  return Object.values(
    getItems().reduce((acc: any, item) => {
      const { category } = item
      acc[category] = acc[category] || []
      acc[category].push(item)
      return acc
    }, {}),
  )
}
