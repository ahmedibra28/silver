const data = [
  {
    category: 'BREAKFAST',
    item: 'Silver Star House Special Breakfast',
    price: 10,
    image: '283A2099.JPG',
    description:
      'Two farm fresh eggs cooked on your choice, maxim potatoes, grilled tomatoes, liver, toast, tea or coffee and a glass of juice',
  },
  {
    category: 'BREAKFAST',
    item: 'Norwegian Breakfast',
    price: 10,
    image: '283A2102.JPG',
    description:
      'Two eggs cooked on your choice, two pancakes, baked beans, tea or coffee and a glass of juice',
  },
  {
    category: 'BREAKFAST',
    item: 'Spanish omelet with baked beans',
    price: 5,
    image: '283A2201.jpg',
    description: 'two eggs, green pepper, onions, tomatoes.',
  },
  {
    category: 'BREAKFAST',
    item: 'Grilled steak and egg',
    price: 6,
    image: '283A2133.JPG',
    description:
      'Grilled steak or egg, Served with lyonnaise potatoes baked beans and toast',
  },
  {
    category: 'BREAKFAST',
    item: 'Grilled chicken and egg',
    price: 6,
    image: '283A2130.JPG',
    description:
      'Grilled steak or egg, Served with lyonnaise potatoes baked beans and toast',
  },
  {
    category: 'SOMALI BREAKFAST',
    item: 'kalaankal',
    price: 5,
    image: '283A2089.JPG',
  },
  {
    category: 'SOMALI BREAKFAST',
    item: 'Suqaar',
    price: 5,
    image: '283A2085.JPG',
    description:
      'beef or carmeel braised with potatoes and vegetables, Served with angeera or bread',
  },
  {
    category: 'SOMALI BREAKFAST',
    item: 'Pumpkin oats',
    price: 3,
    image: '283A2218.jpg',
    description: 'Pumpkin puree boiled with whole oats',
  },
  {
    category: 'SOMALI BREAKFAST',
    item: 'Plain oat porridge',
    price: 2,
    image: '283A2216.jpg',
    description: 'Whole healthy oats boiled with milk',
  },
  {
    category: 'SOMALI BREAKFAST',
    item: 'Pancakes',
    price: 3,
    image: '283A9844.JPG',
    description: 'Plain american pancake served with fruits and cream',
  },
  {
    category: 'SOMALI BREAKFAST',
    item: 'Pancakes',
    price: 3,
    image: '283A9846.JPG',
    description: 'Chocolate american pancake served with fruits and cream',
  },
  {
    category: 'SOMALI BREAKFAST',
    item: 'Pancakes',
    price: 3,
    image: '283A9844.JPG',
    description: 'Caramel american pancake served with fruits and cream',
  },
  {
    category: 'SOMALI BREAKFAST',
    item: 'Home fries heaven',
    price: 4,
    image: '283A2074.JPG',
    description:
      'Large serving of home fries topped with cheese, guacamole and salsa',
  },
  {
    category: 'SIDES',
    item: 'Sour cream, One egg, Toast',
    price: 1,
    image: 'Sour cream, One egg, Toast.jpg',
  },
  {
    category: 'SIDES',
    item: 'Salsa',
    price: 1,
    image: 'Salsa.jpg',
  },
  {
    category: 'SIDES',
    item: 'Jalapenos',
    price: 1,
    image: 'Jalapenos.jpg',
  },
  {
    category: 'SIDES',
    item: 'Home fries',
    price: 1,
    image: 'Home fries.jpg',
  },
  {
    category: 'SIDES',
    item: 'Sausage (two)',
    price: 1,
    image: 'Sausage (two).jpg',
  },
  {
    category: 'SIDES',
    item: 'Beef bacon',
    price: 1,
    image: 'Beef bacon.jpg',
  },
  {
    category: 'SIDES',
    item: 'Strawberries',
    price: 1,
    image: 'Strawberries.jpg',
  },
  {
    category: 'SIDES',
    item: 'Whipped cream',
    price: 1,
    image: 'Whipped cream.jpg',
  },
  {
    category: 'SOUPS',
    item: 'Spinach soup ',
    price: 3,
    image: '283A2093.JPG',
    description: 'Puree of spinach soup finished with cream',
  },
  {
    category: 'SOUPS',
    item: 'Cream of mushroom soup',
    price: 5,
    image: '283A2080.JPG',
    description: 'Savory cream of mushroom soup served with a burn',
  },
  {
    category: 'SOUPS',
    item: 'Cream of butternut soup',
    price: 5,
    image: '283A2060.JPG.jpg',
  },
  {
    category: 'SOUPS',
    item: 'tom kha ghai soup',
    price: 5,
    image: '283A2077.JPG',
    description: 'hot and sour fish or chicken coconut soup served with bread.',
  },
  {
    category: 'SALADS',
    item: 'Greek island salad ',
    price: 5,
    image: '283A2117.JPG',
    description:
      'Fetta cheese tomatoes, onion, green pepper, cucumber, lettuce vinaigrette sauce',
  },
  {
    category: 'SALADS',
    item: 'Fresh garden salad',
    price: 5,
    image: '283A9858.JPG',
    description:
      'Assorted farm fresh salad vegetables with bread and salad dressing,',
  },
  {
    category: 'SALADS',
    item: 'Chicken Caesar salad',
    price: 6,
    image: '283A2116.JPG',
    description:
      'Lettuce crispy chicken flanks, green pepper, tomato, chicken, parmesan shavings and croutons',
  },
  {
    category: 'SALADS',
    item: 'Silver Star special Cobb salad',
    price: 8,
    image: '283A2204.jpg',
    description:
      'Sweetcorn, mixed green leaves, boiled eggs, black olives, avocado, chicken flanks, and beetroot',
  },
  {
    category: 'SALADS',
    item: 'Chicken salad ',
    price: 6,
    image: '1I6A9821.JPG',
    description:
      'Chicken mayonnaise onion, tomatoes, lettuce, celery, cucumber',
  },
  {
    category: 'SALADS',
    item: 'Tuna salad',
    price: 6,
    image: '283A2121.JPG',
    description:
      'Tuna fillet, onion, lettuce, tomatoes, cucumber, cocktail sauce',
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Chicken quesadilla ',
    price: 6,
    image: '283A2189.jpg',
    description:
      'Braised chicken with jalapeno, onion, green pepper and Mexican spices in tortilla',
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Masala chips',
    price: 3,
    image: '283A2822.JPG',
    description:
      'Aromatic crispy chips, toasted in creamy curry sauce with fresh cilantro',
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Samoosa 1 peace ',
    price: 1,
    image: '283A2065.JPG',
    description: 'meat  or fish',
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Fish fingers. And chips ',
    price: 8,
    image: '283A2071.JPG',
    description: 'Served with salad and tartar sauce',
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'Buffalo chicken wings ',
    price: 5,
    image: '283A2206.jpg',
    description:
      'Marinated bread crumbed chicken wings, served with salad and chips',
  },
  {
    category: 'QUICK BITS AND SAVORY SNACKS',
    item: 'BBQ. Chicken wings',
    price: 5,
    image: '283A2213.jpg',
    description: 'crispy, marinated chicken wings tossed on bbq. Sauce.',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Shuwarma Arabia ',
    price: 6,
    image: 'Copy of DSC09526.JPG',
    description:
      'arabian spiced chicken flame grilled, served with vegetables on a tortilla',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Philadelphia',
    price: 6,
    image: 'Copy of DSC09512.JPG',
    description:
      'Meat, Chicken or Fish. Bbq sauce ketchup, sweetcorn, mushrooms',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Fajita chicken',
    price: 6,
    image: '283A2187.JPG',
    description: 'fajita, cheese,vegetables',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Scallop',
    price: 6,
    image: 'Copy of DSC09540.JPG',
    description: 'Fish or Chicken ( brea crumbed, deep fried, vegetables)',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Crispy chicken',
    price: 6,
    image: 'Copy of DSC09544.JPG',
    description: 'crispy floured deep fried chicken nuggets',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Chicken popcorn',
    price: 6,
    image: 'Copy of DSC09523.JPG',
    description: 'floured deep fried, ketchup, sim sim, lettuce, fajita.',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Humus',
    price: 2,
    image: 'Copy of DSC09549.JPG',
    description: 'chick pees, garlic, oil, paprika, tahinna, olive oil.',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Farafel',
    price: 4,
    image: 'Farafel.webp',
    description: 'chick pees, garlic, oil, paprika, tahinna, deep fried.',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Manaqish  (Zactar)',
    price: 4,
    image: '283A9889.JPG',
  },
  {
    category: 'ARABIC CUISINE',
    item: 'Mixed Manaqish  1 PC ',
    price: 2,
    image: '283A9855.JPG',
    description: 'Za’tar cheese',
  },
  {
    category: 'I LOVE PASTA',
    item: 'Pasta al forno (béchamel) ',
    price: 10,
    image: '283A2049.JPG.jpg',
    description:
      'Oven cooked pasta with beef Bolognese sauce, béchamel and gratinated cheese',
  },
  {
    category: 'I LOVE PASTA',
    item: 'Penne alfredo ',
    price: 10,
    image: 'DSC09482.JPG',
    description: 'Penne pasta in creamy mushroom sauce, chicken and garlic',
  },
  {
    category: 'I LOVE PASTA',
    item: 'Fruiti de’ mare',
    price: 12,
    image: '1I6A9846.JPG',
    description:
      'Linguine pasta in mixed seafood of lobster, shrimps calamari and fish, with a touch of chilli',
  },
  {
    category: 'I LOVE PASTA',
    item: 'Spaghetti bolognaise ',
    price: 10,
    image: '1I6A9846.JPG',
    description:
      'Linguine pasta in flavored beef sauce mozzarella and parmesan shavings',
  },
  {
    category: 'I LOVE PASTA',
    item: 'lasagna',
    price: 10,
    image: 'Copy of DSC09508.JPG',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Grilled Chicken',
    price: 10,
    image: '1I6A9839.JPG',
    description:
      'Herb marinated chicken breast, served with vegetables and accompaniments of your choice',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Schnitzel al Florentine ',
    price: 10,
    image: '283A2143.JPG',
    description:
      'Crispy bread crumbed chicken, served with spinach and pepper sauce and an accompaniment of your choice',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Swahili coconut fish ',
    price: 8,
    image: '283A2209.jpg',
    description:
      'Braised fish in coconut and ginger mild spices with an accompaniment of your choice',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Grilled fish',
    price: 10,
    image: '1I6A9843.JPG',
    description:
      'herb marinated fish fillets served with the accompaniments of your choice and fresh slad tartare sauce',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Grilled cod ',
    price: 8,
    image: '1I6A9834.JPG',
    description:
      'Grilled cod fish with onions, tomatoes, black olives, green pepper emulsion on a potato, lettuce pumpkin and feta cheese salad',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Lobster thermidor ',
    price: 20,
    image: '1I6A9852.JPG',
    description: 'Stuffed rock lobster with mushroom and savory spinach',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Braised dhyllo ',
    price: 12,
    image: 'Copy of DSC09483.JPG',
    description:
      'Braised baby goat with cadamom and cinnamon infused herbs served with an accompaniment of your choice',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Grilled prime of beef fillet ',
    price: 10,
    image: '1I6A9827.JPG',
    description:
      'Rubbed beef fillet with secret spices grilled to perfection and served with creamy pepper sauce, vegetables and accompaniments of your choice',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Sizzling beef/chicken or fish. ',
    price: 12,
    image: '283A9829.JPG',
    description: 'With vegetables and served with accompaniment of your choice',
  },
  {
    category: 'LUNCH AND DINNER HOUSE SPECIALITIES',
    item: 'Silver Star special meat platter ',
    price: 20,
    image: '283A9838.JPG',
    description:
      'A platter of assorted meat, fish, and chicken, on a bed of grilled vegetables and an accompaniment of your choice',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Australian burger ',
    price: 7,
    image: 'Copy of DSC09529.JPG',
    description:
      'Grilled chicken, beetroot, pineapple, lettuce, tomatoes, and cheddar cheese',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Mexican tex. Burger',
    price: 7,
    image: '283A2147.JPG',
    description:
      'Barbeque chicken, pico de’ gallo, jalapeno, lettuce and grilled pineapple',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Delux jumbo burger ',
    price: 7,
    image: '283A2147.JPG',
    description:
      'Grilled steak, lettuce, tomato, fried egg, and cheddar cheese',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Grilled beef and mushroom burger ',
    price: 7,
    image: '283A2185.JPG',
    description:
      'Grilled pepper steak, lettuce, tomato, onion, savory mushrooms, and cheddar cheese',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Philadelphia cheese steak sandwich with chips',
    price: 6,
    image: 'original DSC09512.JPG',
    description:
      'Fajita beef, cream cheese and cheddar cheese on ciabatta crostini',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Tuna melt sub. With chips ',
    price: 7,
    image: '283A2170.JPG',
    description: 'Savory tuna with mayo, green pepper, onion',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Chicken mayo sandwich with chips ',
    price: 6,
    image: '283A2170.JPG',
    description: 'Savory chicken with mayonnaise, celery, onion and lettuce',
  },
  {
    category: 'BURGERS AND SANDWICHES',
    item: 'Silver Star special club sandwich with chips ',
    price: 8,
    image: '283A2166.JPG',
    description:
      'Double decker chicken, meat, eggs, onion, tomato, lettuce and cheddar cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Large Pizza ',
    price: 14,
    image: '283A2171.JPG',
  },
  {
    category: 'PIZZA MENU',
    item: 'MediumPizza ',
    price: 12,
    image: '283A2181.JPG',
  },
  {
    category: 'PIZZA MENU',
    item: 'Small Pizza ',
    price: 8,
    image: '283A2176.JPG',
  },
  {
    category: 'PIZZA MENU',
    item: 'Extra cheese ',
    price: 1,
    image: 'sides pic.jpg',
  },
  {
    category: 'PIZZA MENU',
    item: 'Pizza magharita bassilico large',
    size: 'L-14, M-12, S-8',
    image: '283A2176.JPG',
    description:
      'Tomato, provencale sauce, diced pineapple, sweetcorn, beef pepperoni, mozzarella cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Hawaiian pizza Large',
    size: 'L-14, M-12, S-8',
    image: '283A2176.JPG',
    description:
      'Provencale sauce, diced pineapple, sweetcorn, beef pepperoni, mozzarella cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Vegetarian pizza ',
    size: 'L-14, M-12, S-8',
    image: '283A2176.JPG',
    description:
      'Provencale sauce, artichoke, sliced onion, sliced mushrooms, fresh diced tomatoes, spinach, zucchini, fresh diced green pepper, black olives mozzarella cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Four seasons pizza ',
    size: 'L-14, M-12, S-8',
    image: '283A2176.JPG',
    description:
      'Provencale sauce, sliced onions, fresh diced green pepper, sliced mushrooms, pepperoni, fresh diced tomatoes, and mozzarella cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Chicken barbeque pizza ',
    size: 'L-14, M-12, S-8',
    image: '283A2176.JPG',
    description:
      'Provencale sauce, sliced onions, sliced mushrooms, diced chicken, sweet barbeque sauce and mozzarella cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Chicken mushroom pizza',
    size: 'L-14, M-12, S-8',
    image: '283A2176.JPG',
    description:
      'Provencale sauce, sliced onions, sliced mushrooms, diced chicken, sweet barbeque sauce and mozzarella cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Sweet and sour chicken',
    size: 'L-14, M-12, S-8',
    image: '283A2176.JPG',
    description:
      'Provencale sauce, diced chicken diced pineapple, fresh diced green pepper sweet n’ sour sauce, mozzarella cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Club pizza',
    size: 'L-14, M-12, S-8',
    image: '283A2176.JPG',
    description:
      'Provencale sauce, diced chicken, ground beef, gravey rave sauce, mozzarella cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Something meaty pizza',
    size: 'L-14, M-12, S-8',
    image: '283A2176.JPG',
    description:
      'Provencale sauce, pepperoni slices, diced tomatoes, green pepper, black olives, mozzarella cheese',
  },
  {
    category: 'PIZZA MENU',
    item: 'Calzone pizza  (fold over)',
    price: 15,
    image: '283A2176.JPG',
    description:
      'Cream cheese, sliced onions, sliced mushrooms, pepperoni slices, diced tomatoes, green pepper, black olives, mozzarella cheese',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Biryani Chicken',
    price: 10,
    image: 'Copy of DSC09435.JPG',
    description:
      'Fresh chicken and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Biryani Fish',
    price: 10,
    image: 'Copy of DSC09435.JPG',
    description:
      'Fresh Fish and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Biryani Meat',
    price: 10,
    image: 'Copy of DSC09435.JPG',
    description:
      'Fresh Meat and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Malai chicken tikka / fish',
    price: 8,
    image: 'Copy of DSC09391.JPG',
    description:
      'Marinate the chicken thighs in ginger garlic paste, yogurt and grated cheese, cashew paste, cream, salt, pepper smoky sharp flavor… Mixed Tanduri platar Smoll Platter consisting of four types of mixed kebabs including two pess banjara kebabs , two malai.chicken tikka, two fish tikka and one peri peri. Legs',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Silver special tandoori Platter',
    price: 20,
    image: 'DSC09360.JPG',
    description:
      'Plater consisting of six types of mixed kebabs including two banjara kebabs,and two malai tikka , two fish tikka, Two Peri Peri Chicken Tikka, Two Mutton Kebab and ,Two Piece Kalmi Kebab Legs…all time your favorite',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Chicken /fish curry',
    price: 8,
    image: 'Copy of DSC09416.JPG',
    description:
      'Made by simmering chicken in fresh ground indian spice powder and onion Tamato gravy delicious taste garnish green coriander.and fresh cooking cream',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Butter chicken',
    price: 8,
    image: 'Copy of DSC09405.JPG',
    description:
      'Marinated chicken is grilled in a tandoor simmered in a rich creamy and butter tomato gravy all time favorite',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Chicken kadai / fish',
    price: 8,
    image: 'Copy of DSC09425.JPG',
    description:
      'Spicy tomato masala sauce made with julienne Red Green Yellow Capsicum onion Cumin Coriander Seeds Red Chilli freshly ground spices”spicy dish and is traditionally made in a cast iron wok',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Chicken, Mutton, Fish biryani',
    price: 10,
    image: 'Copy of DSC09435.JPG',
    description:
      'Fresh chicken and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Egg fried rice',
    price: 4,
    image: 'Copy of DSC09489.JPG',
    description:
      'Cooked basmati rice, and mix egg, vegetable and tossed with all chinese souce',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Chicken Chili',
    price: 6,
    image: 'Copy of DSC09395.JPG',
    description:
      'Finger cut frish chicken and marinated with deep fried and cooked with garlic, capcicum, onion and tossed with chinese souce',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Garlic nan',
    price: 1.5,
    image: 'DSC09462.JPG',
    description:
      'White flour stuffed garlic and green coriander on a traditional flat bread from India. Normally baked inside hot Tandoor ovens with charcoal or wood fire',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Butter nan',
    price: 1.5,
    image: 'Copy of DSC09462.JPG',
    description:
      'White flour stuffed black white sesame and green coriander on a traditional flat bread from India. Normally baked inside hot Tandoor ovens with charcoal or wood fire',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Tanduri bread',
    price: 1.5,
    image: 'Copy of DSC09451.JPG',
    description:
      'Flat breads made with whole wheat flour and cooked in a tandoor, a clay oven',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Indian chapati',
    price: 1,
    image: 'Copy of DSC09451.JPG',
    description:
      'Flour mixed salt and sugar Triangle shaped flatbread made from wheat flour and cooked in a pan',
  },

  {
    category: 'INDIAN CUISINE',
    item: 'Reshmi Kabab',
    price: 8,
    image: 'Copy of DSC09400.JPG',
    description: 'Recipe for chicken reshmi kaba',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Silver mixed tandoori Platter',
    price: 10,
    image: 'Copy of DSC09360.jpg',
    description:
      'chicken breast 6 pic and marinated yogurt, salt.sugur,and Indian spices ginger garlic paste    and egg white sarv with sugar syrup',
  },
  {
    category: 'INDIAN CUISINE',
    item: 'Silver special tandoori Platter',
    price: 20,
    image: 'Copy of DSC09382.JPG',
    description:
      'Plater consisting of six types of mixed kebabs including two banjara kebabs,and two malai tikka , two fish tikka, Two Peri Peri Chicken Tikka, Two Mutton Kebab and ,Two Piece Kalmi Kebab Legs…all time your favorite',
  },

  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Vanilla cake (eggs)',
    price: 3,
    image: '283A2958.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Plain croissant. (eggs)',
    price: 2,
    image: '1I6A3062.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Cinnamon $ raisin roll.',
    price: 3,
    image: '1I6A3058.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Chocolate croissant.',
    price: 3,
    image: '1I6A3054.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Black forest gateau (egg)',
    price: 3,
    image: '283A2944.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'White forest gateau. (egg)',
    price: 3,
    image: '283A2951.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Lotus cheese cake',
    price: 4,
    image: '283A2952.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Tiramisu cheese cake.',
    price: 4,
    image: '1I6A2999.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Date cake eggless.',
    price: 4,
    image: '1I6A3085.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Strawberry cake (eggless)',
    price: 3,
    image: '283A2948.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Marble cake.(eggs)',
    price: 4,
    image: '1I6A3045.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Black magic',
    price: 3,
    image: '1I6A3050.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Cup cakes – vanilla, chocolate, strawbwrry.',
    price: 1.5,
    image: '1I6A3013.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Swiss roll.',
    price: 3,
    image: '1I6A3030.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Small doughnuts',
    price: 1,
    image: '1I6A3039.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Big doughnuts',
    price: 2,
    image: '1I6A3019.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Carmel cake',
    price: 3,
    image: '283A2938.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Strawberry  cheese cake ',
    price: 3,
    image: '283A2955.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Chocolate Cake',
    price: 3,
    image: '283A2942.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice espresso',
    price: 2,
    image: '283A2737.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice American',
    price: 2,
    image: '1I6A3066.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice latte',
    price: 2.5,
    image: '1I6A3069.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice vanilla latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice Caremeal latte',
    price: 2.5,
    image: '1I6A3079.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice hazelnut latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice Spanish latte',
    price: 2.5,
    image: '1I6A3073.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice chocolate latte',
    price: 2.5,
    image: '1I6A3078.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice Pistachio latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice mocha latte',
    price: 2.5,
    image: '1I6A3078.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice white mocha latte',
    price: 2.5,
    image: '1I6A3073.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice cookie latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice popcorn latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice cinnamon latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Ice toffee nut latte',
    price: 3,
    image: '1I6A3071.JPG',
  },
  {
    category: 'smoothie',
    item: 'Silver Smoothie',
    price: 3,
    image: '283A2813.JPG',
  },
  {
    category: 'smoothie',
    item: 'Smoothie Blueberry',
    price: 3,
    image: '283A2797.JPG',
  },
  {
    category: 'smoothie',
    item: 'Smoothie Pineapple',
    price: 3,
    image: '283A2806.JPG',
  },
  {
    category: 'smoothie',
    item: 'Smoothie Strawberry',
    price: 3,
    image: '283A2804.JPG',
  },
  {
    category: 'smoothie',
    item: 'Smoothie passion fruit',
    price: 3,
    image: '283A2806.JPG',
  },
  {
    category: 'smoothie',
    item: 'Smoothie green apple',
    price: 3,
    image: '283A2812.JPG',
  },
  {
    category: 'smoothie',
    item: 'Smoothie kiwi',
    price: 3,
    image: '283A2812.JPG',
  },
  {
    category: 'smoothie',
    item: 'Smoothie cherry',
    price: 3,
    image: '283A2813.JPG',
  },
  {
    category: 'smoothie',
    item: 'Smoothie peach',
    price: 3,
    image: '283A2806.JPG',
  },
  {
    category: 'smoothie',
    item: 'Smoothie Mango',
    price: 3,
    image: '283A2806.JPG',
  },
  {
    category: 'frappe',
    item: 'Silver frappe',
    price: 4,
    image: '283A2826.JPG',
  },
  {
    category: 'frappe',
    item: 'Caremeal frappe',
    price: 4,
    image: '283A2829.JPG',
  },
  {
    category: 'frappe',
    item: 'Chocolate frappe',
    price: 4,
    image: '283A2851.JPG',
  },
  {
    category: 'frappe',
    item: 'Vanilla frappe',
    price: 4,
    image: '283A2847.JPG',
  },
  {
    category: 'frappe',
    item: 'Lotus Frappe',
    price: 4,
    image: '283A2841.JPG',
  },
  {
    category: 'mojito',
    item: 'Silver Mojito',
    price: 3,
    image: '283A2855.JPG',
  },
  {
    category: 'mojito',
    item: 'Mojito Strawberry',
    price: 3,
    image: '283A2858.JPG',
  },
  {
    category: 'mojito',
    item: 'Mojito Blueberry',
    price: 3,
    image: '283A2862.JPG',
  },
  {
    category: 'mojito',
    item: 'Mojito passion fruit',
    price: 3,
    image: '283A2873.JPG',
  },
  {
    category: 'mojito',
    item: 'Mojito Pineapple',
    price: 3,
    image: '283A2873.JPG',
  },
  {
    category: 'mojito',
    item: 'Mojito peach',
    price: 3,
    image: '283A2873.JPG',
  },
  {
    category: 'mojito',
    item: 'Mojito green apple',
    price: 3,
    image: '283A2869.JPG',
  },
  {
    category: 'mojito',
    item: 'Mojito kiwi',
    price: 3,
    image: '283A2869.JPG',
  },
  {
    category: 'mojito',
    item: 'Mojito raspberry',
    price: 3,
    image: '283A2877.JPG',
  },
  {
    category: 'mojito',
    item: 'Mojito Mango',
    price: 3,
    image: '283A2873.JPG',
  },
  {
    category: 'ice Tea',
    item: 'Ice tea lemon',
    price: 2,
    image: '283A2883.JPG',
  },
  {
    category: 'ice Tea',
    item: 'Ice tea peach',
    price: 2,
    image: '283A2886.JPG',
  },
  {
    category: 'ice Tea',
    item: 'Ice tea raspberry',
    price: 2,
    image: '283A2880.JPG',
  },
  {
    category: 'milk shake',
    item: 'Silver milk shake',
    price: 4,
    image: '283A2780.JPG',
  },
  {
    category: 'milk shake',
    item: 'Chocolate milk shake',
    price: 4,
    image: '283A2749.JPG',
  },
  {
    category: 'milk shake',
    item: 'Strawberry milk shake',
    price: 4,
    image: '283A2742.JPG',
  },
  {
    category: 'milk shake',
    item: 'Louts milk shake',
    price: 4,
    image: '283A2764.JPG',
  },
  {
    category: 'milk shake',
    item: 'Oreo milk shake',
    price: 4,
    image: '283A2759.JPG',
  },
  {
    category: 'milk shake',
    item: 'Vanila Shake',
    price: 4,
    image: '283A2753.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso',
    price: 2,
    image: '283A2892.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso romano',
    price: 2,
    image: '283A2911.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso con panna',
    price: 2.5,
    image: '283A2913.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso affogato',
    price: 2.5,
    image: '283A2919.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso macchiato',
    price: 2,
    image: '283A2916.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'American',
    price: 2,
    image: '283A2903.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Cappuccino',
    price: 2,
    image: '283A2894.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Latte',
    price: 2,
    image: '283A2931.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Vanilla latte',
    price: 2,
    image: '283A2924.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Caremeal latte',
    price: 2,
    image: '283A2924.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Chocolate latte',
    price: 2,
    image: '283A2922.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Hazelnut latte',
    price: 2,
    image: '283A2924.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Cinnamon latte',
    price: 2,
    image: '283A2921.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Toffee nut latte',
    price: 2,
    image: '283A2931.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Cookie latte',
    price: 2,
    image: '283A2931.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Lotus latte',
    price: 2,
    image: '283A2937.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Popcorn latte',
    price: 2,
    image: '283A2931.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Spanish latte',
    price: 2,
    image: '283A2921.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Pistachio latte',
    price: 2,
    image: '283A2924.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'White mocha latte',
    price: 2,
    image: '283A2921.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Caremeal macchiato latte',
    price: 2,
    image: '283A2928.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Strowberry',
    price: 3,
    image: '283A2765.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Rubbery refresh',
    price: 3,
    image: '283A2775.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Passion Fruit',
    price: 3,
    image: '283A2773.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Jubitcabe puree',
    price: 3,
    image: '283A2782.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Blueberry',
    price: 3,
    image: '283A2787.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Kiwi',
    price: 3,
    image: '283A2792.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Green Apple',
    price: 3,
    image: '283A2792.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Pine Apple Sangria',
    price: 3,
    image: '283A2773.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Mango',
    price: 3,
    image: '283A2773.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Sangria',
    price: 3,
    image: '283A2801.JPG',
  },
]

const jubbaData = [
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Vanilla cake (eggs)',
    price: 3,
    image: '283A2958.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Plain croissant. (eggs)',
    price: 2,
    image: '1I6A3062.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Cinnamon $ raisin roll.',
    price: 3,
    image: '1I6A3058.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Chocolate croissant.',
    price: 3,
    image: '1I6A3054.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Black forest gateau (egg)',
    price: 3,
    image: '283A2944.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'White forest gateau. (egg)',
    price: 3,
    image: '283A2951.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Lotus cheese cake',
    price: 4,
    image: '283A2952.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Tiramisu cheese cake.',
    price: 4,
    image: '1I6A2999.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Date cake eggless.',
    price: 4,
    image: '1I6A3085.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Strawberry cake (eggless)',
    price: 3,
    image: '283A2948.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Marble cake.(eggs)',
    price: 4,
    image: '1I6A3045.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Black magic',
    price: 3,
    image: '1I6A3050.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Cup cakes – vanilla, chocolate, strawbwrry.',
    price: 1.5,
    image: '1I6A3045.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice latte',
    price: 2.5,
    image: '1I6A3069.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Apple pie',
    price: 4,
    image: '1I6A3030.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Small doughnuts',
    price: 1,
    image: '1I6A3019.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Big doughnuts',
    price: 2,
    image: '1I6A3039.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Carmel cake',
    price: 3,
    image: '283A2938.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Strawberry  cheese cake ',
    price: 3,
    image: '283A2955.JPG',
  },
  {
    category: 'PASTRIES CAKES AND DESSERTS',
    item: 'Chocolate Cake',
    price: 3,
    image: '283A2942.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice espresso',
    price: 2,
    image: '283A2737.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice American',
    price: 2,
    image: '1I6A3066.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice vanilla latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice Caremeal latte',
    price: 2.5,
    image: '1I6A3079.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice hazelnut latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice Spanish latte',
    price: 2.5,
    image: '1I6A3073.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice chocolate latte',
    price: 2.5,
    image: '1I6A3078.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice Pistachio latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice mocha latte',
    price: 2.5,
    image: '1I6A3078.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice white mocha latte',
    price: 2.5,
    image: '1I6A3073.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice cookie latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice popcorn latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice cinnamon latte',
    price: 2.5,
    image: '1I6A3071.JPG',
  },
  {
    category: 'ICED LATTES',
    item: 'Ice toffee nut latte',
    price: 3,
    image: '1I6A3071.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Silver Smoothie',
    price: 3,
    image: '283A2813.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Smoothie Blueberry',
    price: 3,
    image: '283A2797.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Smoothie Pineapple',
    price: 3,
    image: '283A2806.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Smoothie Strawberry',
    price: 3,
    image: '283A2804.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Smoothie passion fruit',
    price: 3,
    image: '283A2806.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Smoothie green apple',
    price: 3,
    image: '283A2812.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Smoothie kiwi',
    price: 3,
    image: '283A2812.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Smoothie cherry',
    price: 3,
    image: '283A2813.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Smoothie peach',
    price: 3,
    image: '283A2806.JPG',
  },
  {
    category: 'SMOOTHIE',
    item: 'Smoothie Mango',
    price: 3,
    image: '283A2806.JPG',
  },
  {
    category: 'FRAPPE',
    item: 'Silver frappe',
    price: 3,
    image: '283A2826.JPG',
  },
  {
    category: 'FRAPPE',
    item: 'Caremeal frappe',
    price: 3,
    image: '283A2829.JPG',
  },
  {
    category: 'FRAPPE',
    item: 'Chocolate frappe',
    price: 3,
    image: '283A2851.JPG',
  },
  {
    category: 'FRAPPE',
    item: 'Vanilla frappe',
    price: 3,
    image: '283A2847.JPG',
  },
  {
    category: 'FRAPPE',
    item: 'Lotus Frape',
    price: 3,
    image: '283A2841.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Silver Mojito',
    price: 3,
    image: '283A2855.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Mojito Strawberry',
    price: 3,
    image: '283A2858.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Mojito Blueberry',
    price: 3,
    image: '283A2862.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Mojito passion fruit',
    price: 3,
    image: '283A2873.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Mojito Pineapple',
    price: 3,
    image: '283A2873.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Mojito peach',
    price: 3,
    image: '283A2873.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Mojito green apple',
    price: 3,
    image: '283A2869.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Mojito kiwi',
    price: 3,
    image: '283A2869.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Mojito raspberry',
    price: 3,
    image: '283A2873.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Mojito Mango',
    price: 3,
    image: '283A2873.JPG',
  },
  {
    category: 'ice Tea',
    item: 'Ice tea lemon',
    price: 2,
    image: '283A2883.JPG',
  },
  {
    category: 'ice Tea',
    item: 'Ice tea peach',
    price: 2,
    image: '283A2886.JPG',
  },
  {
    category: 'ice Tea',
    item: 'Ice tea raspberry',
    price: 2,
    image: '283A2880.JPG',
  },
  {
    category: 'Milk SHAKE',
    item: 'Silver milk shake',
    price: 4,
    image: '283A2880.JPG',
  },
  {
    category: 'Milk SHAKE',
    item: 'Chocolate milk shake',
    price: 4,
    image: '283A2749.JPG',
  },
  {
    category: 'Milk SHAKE',
    item: 'Strawberry milk shake',
    price: 4,
    image: '283A2742.JPG',
  },
  {
    category: 'Milk SHAKE',
    item: 'Louts milk shake',
    price: 4,
    image: '283A2764.JPG',
  },
  {
    category: 'Milk SHAKE',
    item: 'Oreo milk shake',
    price: 4,
    image: '283A2759.JPG',
  },
  {
    category: 'Milk SHAKE',
    item: 'Vanila Shake',
    price: 4,
    image: '283A2753.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso',
    price: 2,
    image: '283A2892.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso romano',
    price: 2,
    image: '283A2911.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso con panna',
    price: 2,
    image: '283A2913.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso affogato',
    price: 2,
    image: '283A2919.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Espresso macchiato',
    price: 2,
    image: '283A2916.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'American',
    price: 2,
    image: '283A2903.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Cappuccino',
    price: 2,
    image: '283A2894.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Latte',
    price: 2,
    image: '283A2931.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Vanilla latte',
    price: 2,
    image: '283A2924.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Caremeal latte',
    price: 2,
    image: '283A2924.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Chocolate latte',
    price: 2,
    image: '283A2922.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Hazelnut latte',
    price: 2,
    image: '283A2924.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Cinnamon latte',
    price: 2,
    image: '283A2921.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Toffee nut latte',
    price: 2,
    image: '283A2931.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Cookie latte',
    price: 2,
    image: '283A2931.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Lotus latte',
    price: 2,
    image: '283A2937.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Popcorn latte',
    price: 2,
    image: '283A2931.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Spanish latte',
    price: 2,
    image: '283A2921.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Pistachio latte',
    price: 2,
    image: '283A2924.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'White mocha latte',
    price: 2,
    image: '283A2921.JPG',
  },
  {
    category: 'Hot Coffee',
    item: 'Caremeal macchiato latte',
    price: 2,
    image: '283A2928.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Stropy',
    price: 3,
    image: '283A2765.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Rubby',
    price: 3,
    image: '283A2775.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Passion Fruit',
    price: 3,
    image: '283A2773.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Jubitcabe puree',
    price: 3,
    image: '283A2782.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Blueberry',
    price: 3,
    image: '283A2787.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Kiwi',
    price: 3,
    image: '283A2792.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Green Apple',
    price: 3,
    image: '283A2792.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Pine Apple',
    price: 3,
    image: '283A2773.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Mango',
    price: 3,
    image: '283A2773.JPG',
  },
  {
    category: 'Limon',
    item: 'Limon Sangria',
    price: 3,
    image: '283A2801.JPG',
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

export const groupItemsByCategorySlug = (slug: string) => {
  const slugToTitle = slug?.replaceAll('-', ' ')?.toLowerCase()

  const items = getItemsByCategory(slugToTitle)

  return Object.values(
    items.reduce((acc: any, item) => {
      const { category } = item
      acc[category] = acc[category] || []
      acc[category].push(item)
      return acc
    }, {}),
  )
}

export const getItemsJubba = () => {
  return jubbaData.map((item) => ({
    ...item,
    size: null,
    image: item?.image
      ? `https://farshaxan.blr1.cdn.digitaloceanspaces.com/silver/${item.image}`
      : null,
  }))
}

export const getCategoriesJubba = () => {
  return getItemsJubba().map((item) => item.category)
}

export const getItemsByCategoryJubba = (category: string) => {
  return getItemsJubba().filter(
    (item) => item.category.toLowerCase() === category.toLowerCase(),
  )
}

export const groupItemsByCategoryJubba = () => {
  return Object.values(
    getItemsJubba().reduce((acc: any, item) => {
      const { category } = item
      acc[category] = acc[category] || []
      acc[category].push(item)
      return acc
    }, {}),
  )
}

export const groupItemsByCategorySlugJubba = (slug: string) => {
  const slugToTitle = slug?.replaceAll('-', ' ')?.toLowerCase()

  const items = getItemsByCategory(slugToTitle)

  return Object.values(
    items.reduce((acc: any, item) => {
      const { category } = item
      acc[category] = acc[category] || []
      acc[category].push(item)
      return acc
    }, {}),
  )
}
