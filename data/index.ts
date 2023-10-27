const data = [
  {
    category: 'Breakfast',
    item: 'Silver Star House Special Breakfast',
    description:
      'Two farm fresh eggs cooked on your choice, maxim potatoes, grilled tomatoes, liver, toast, tea or coffee and a glass of juice',
    price: 10,
  },
  {
    category: 'Breakfast',
    item: 'Norwegian Breakfast',
    description:
      'Two eggs cooked on your choice, two pancakes, baked beans, tea or coffee and a glass of juice',
    price: 10,
  },
  {
    category: 'Breakfast',
    item: 'Spanish omelet with baked beans',
    price: 5,
  },
  {
    category: 'Somali Breakfast',
    item: 'Liver (beer) ',
    description: 'Served with angeera or bread',
    price: 5,
  },
  {
    category: 'Somali Breakfast',
    item: 'Sookar ',
    description: 'Served with angeera or bread',
    price: 5,
  },
  {
    category: 'Somali Breakfast',
    item: 'Pumpkin oats',
    description: 'Pumpkin puree boiled with whole oats',
    price: 3,
  },
  {
    category: 'Somali Breakfast',
    item: 'Plain oat porridge',
    description: 'Wwhole healthy oats boiled with milk',
    price: 2,
  },
  {
    category: 'Somali Breakfast',
    item: 'Pancakes',
    description:
      '(plain, chocolate, caramel) American served with fruits and cream',
    price: 3,
  },
  {
    category: 'Somali Breakfast',
    item: 'Home fries heaven',
    description:
      'Large serving of home fries topped with cheese, guacamole and salsa',
    price: 4,
  },
  {
    category: 'Somali Breakfast',
    item: 'Huevos rancheros ',
    description:
      'Tortilla topped with two eggs, spicy ranchero sauce and melted cheese, served with baked beans home fries guacamole and salsa',
    price: 5,
  },
  {
    category: 'Somali Breakfast',
    item: 'Grilled steak / chicken and egg',
    description: 'Served with lyonnaise potatoes and toast',
    price: 6,
  },
  {
    category: 'Sides',
    item: 'Sour cream, One egg, Toast, Guacamole',
    price: 1,
  },
  {
    category: 'Sides',
    item: 'Salsa',
    price: 1,
  },
  {
    category: 'Sides',
    item: 'Jalapenos',
    price: 1,
  },
  {
    category: 'Sides',
    item: 'Home fries',
    price: 1,
  },
  {
    category: 'Sides',
    item: 'Sausage (two)',
    price: 1,
  },
  {
    category: 'Sides',
    item: 'Beef bacon',
    price: 1,
  },
  {
    category: 'Sides',
    item: 'Strawberries',
    price: 1,
  },
  {
    category: 'Sides',
    item: 'Whipped cream',
    price: 1,
  },
  {
    category: 'Soups',
    item: 'Spinach soup ',
    description: 'Puree of spinach soup finished with cream',
    price: 3,
  },
  {
    category: 'Soups',
    item: 'Cream of mushroom soup',
    description: 'Savory cream of mushroom soup served with a burn',
    price: 5,
  },
  {
    category: 'Soups',
    item: 'Cream of butternut soup',
    price: 5,
  },
  {
    category: 'Soups',
    item: 'Mutton soup ',
    description: 'Mutton broth served with a burn',
    price: 5,
  },
  {
    category: 'Salads',
    item: 'Classic salads ',
    description:
      'Choice of dressing including vinaigrette, Thai salad dressing, creamy garlic or thousand islands',
  },
  {
    category: 'Salads',
    item: 'Greek island salad ',
    description:
      'Fetta cheese tomatoes, onion, green pepper, cucumber, lettuce vinaigrette sauce',
    price: 5,
  },
  {
    category: 'Salads',
    item: 'Fresh garden salad',
    description:
      'Assorted farm fresh salad vegetables with bread and salad dressing, ',
  },
  {
    category: 'Salads',
    item: 'Chicken Caesar salad',
    description:
      'Lettuce crispy chicken flanks, green pepper, tomato, chicken, parmesan shavings and croutons',
    price: 6,
  },
  {
    category: 'Salads',
    item: 'Insalata de’ mare ',
    description:
      'Seafood salad with lobster, shrimps, calamari, octopus, lettuce cucumber, tomato, onion, grapefruit, cilantro, lime and capers',
    price: 10,
  },
  {
    category: 'Salads',
    item: 'Silver Star special Cobb salad',
    description:
      'Sweetcorn, mixed green leaves, boiled eggs, black olives, avocado, chicken flanks, and beetroot',
    price: 8,
  },
  {
    category: 'Salads',
    item: 'Chicken salad ',
    description:
      'Chicken mayonnaise onion, tomatoes, lettuce, celery, cucumber',
    price: 6,
    image: '1I6A9821.JPG',
  },
  {
    category: 'Salads',
    item: 'Tuna salad',
    description:
      'Tuna fillet, onion, lettuce, tomatoes, cucumber, cocktail sauce',
    price: 6,
  },
  {
    category: 'Quick Bits and Savory Snacks',
    item: 'Chicken quesadilla ',
    description:
      'Braised chicken with jalapeno, onion, green pepper and Mexican spices in tortilla',
    price: 6,
  },
  {
    category: 'Quick Bits and Savory Snacks',
    item: 'Masala chips',
    description:
      'Aromatic crispy chips, toasted in creamy curry sauce with fresh cilantro',
    price: 3,
  },
  {
    category: 'Quick Bits and Savory Snacks',
    item: 'Giant meat or fish samosa. 3 pcs ',
    price: 5,
  },
  {
    category: 'Quick Bits and Savory Snacks',
    item: 'Fish fingers. And chips ',
    description: 'Served with salad and tartar sauce',
    price: 10,
  },
  {
    category: 'Quick Bits and Savory Snacks',
    item: 'Buffalo chicken wings ',
    description:
      'Marinated bread crumbed chicken wings, served with salad and chips',
    price: 5,
  },
  {
    category: 'Quick Bits and Savory Snacks',
    item: 'Buffalo chicken wings ',
    description:
      'Marinated bread crumbed chicken wings, served with salad and chips',
    price: 5,
  },
  {
    category: 'Arabic Cuisine',
    item: 'Shuwarma Arabia ',
    price: 5,
    image: 'Copy of DSC09526.JPG',
  },
  {
    category: 'Arabic Cuisine',
    item: 'Philadelphia',
    description: 'Meat, Chicken or Fish',
    price: 6,
    image: 'Copy of DSC09512.JPG',
  },
  {
    category: 'Arabic Cuisine',
    item: 'Fajita chicken',
  },
  {
    category: 'Arabic Cuisine',
    item: 'Scallop',
    description: 'Fish or Chicken',
    price: 6,
    image: 'Copy of DSC09540.JPG',
  },
  {
    category: 'Arabic Cuisine',
    item: 'Crispy chicken',
    price: 6,
    image: 'Copy of DSC09544.JPG',
  },
  {
    category: 'Arabic Cuisine',
    item: 'Chicken popcorn',
    price: 6,
    image: 'Copy of DSC09523.JPG',
  },
  {
    category: 'Arabic Cuisine',
    item: 'Humus',
    price: 2,
    image: 'Copy of DSC09549.JPG',
  },
  {
    category: 'Arabic Cuisine',
    item: 'Farafil',
    price: 4,
  },
  {
    category: 'Arabic Cuisine',
    item: 'Manaqish  1 PC ',
    description: 'Za’tar cheese',
    price: 2,
  },
  {
    category: 'Arabic Cuisine',
    item: 'Arabian grilled fish',
    price: 8,
  },
  {
    category: 'I Love Pasta',
    item: 'Pasta al forno (béchamel) ',
    description:
      'Oven cooked pasta with beef Bolognese sauce, béchamel and gratinated cheese',
    price: 10,
  },
  {
    category: 'I Love Pasta',
    item: 'Penne alfredo ',
    description: 'Penne pasta in creamy mushroom sauce, chicken and garlic',
    price: 10,
    image: 'Copy of DSC09482.JPG',
  },
  {
    category: 'I Love Pasta',
    item: 'Fruiti de’ mare',
    description:
      'Linguine pasta in mixed seafood of lobster, shrimps calamari and fish, with a touch of chilli',
    price: 12,
  },
  {
    category: 'I Love Pasta',
    item: 'Spaghetti bolognaise ',
    description:
      'Linguine pasta in flavored beef sauce mozzarella and parmesan shavings',
    price: 10,
    image: '1I6A9846.JPG',
  },
  {
    category: 'I Love Pasta',
    item: 'Spinach ricotta lasagna ',
    description: 'Spinach, ricotta cheese, mozzarella, parmesan',
    price: 10,
  },
  {
    category: 'I Love Pasta',
    item: 'Beef lasagna',
    price: 10,
    image: 'Copy of DSC09508.JPG',
  },
  {
    category: 'Lunch',
    item: 'Grilled Chicken',
    description:
      'Herb marinated chicken breast, served with vegetables and accompaniments of your choice',
    price: 12,
    image: '1I6A9839.JPG',
  },
  {
    category: 'Lunch',
    item: 'Schnitzel al Florentine ',
    description:
      'Crispy bread crumbed chicken, served with spinach and pepper sauce and an accompaniment of your choice',
    price: 12,
  },
  {
    category: 'Lunch',
    item: 'Swahili coconut fish ',
    description:
      'Braised fish in coconut and ginger mild spices with an accompaniment of your choice',
    price: 12,
  },
  {
    category: 'Lunch',
    item: 'Grilled fish',
    description:
      'herb marinated fish fillets served with the accompaniments of your choice and fresh slad tartare sauce',
    price: 12,
    image: '1I6A9843.JPG',
  },
  {
    category: 'Lunch',
    item: 'Grilled cod ',
    description:
      'Grilled cod fish with onions, tomatoes, black olives, green pepper emulsion on a potato, lettuce pumpkin and feta cheese salad',
    price: 12,
    image: '1I6A9834.JPG',
  },
  {
    category: 'Lunch',
    item: 'Mixed sea food platter. ',
    description:
      'Platter of assorted lobster, shrimps, prawns, calamari, fish and octopus on a bed of grilled Mediterranean vegetables and mashed potatoes with a savory sauce',
    price: 30,
  },
  {
    category: 'Lunch',
    item: 'Lobster thermidor ',
    description: 'Stuffed rock lobster with mushroom and savory spinach',
    price: 20,
    image: '1I6A9852.JPG',
  },
  {
    category: 'Lunch',
    item: 'Braised dhyllo ',
    description:
      'Braised baby goat with cadamom and cinnamon infused herbs served with an accompaniment of your choice',
    price: 12,
  },
  {
    category: 'Lunch',
    item: 'Grilled prime of beef fillet ',
    description:
      'Rubbed beef fillet with secret spices grilled to perfection and served with creamy pepper sauce, vegetables and accompaniments of your choice',
    price: 12,
    image: '1I6A9827.JPG',
  },
  {
    category: 'Lunch',
    item: 'Sizzling beef/chicken or fish. ',
    description: 'With vegetables and served with accompaniment of your choice',
    price: 12,
  },
  {
    category: 'Lunch',
    item: 'Silver Star special meat platter ',
    description:
      'A platter of assorted meat, fish, and chicken, on a bed of grilled vegetables and an accompaniment of your choice',
    price: 20,
  },
  {
    category: 'Burgers & Sandwiches',
    item: 'Dheylo',
    price: 10,
  },
  {
    category: 'Burgers & Sandwiches',
    item: 'Australian burger ',
    description:
      'Grilled chicken, beetroot, pineapple, lettuce, tomatoes, and cheddar cheese',
    price: 7,
    image: 'Copy of DSC09529.JPG',
  },
  {
    category: 'Burgers & Sandwiches',
    item: 'Mexican tex. Burger',
    description:
      'Barbeque chicken, pico de’ gallo, jalapeno, lettuce and grilled pineapple',
    price: 7,
  },
  {
    category: 'Burgers & Sandwiches',
    item: 'Delux jumbo burger ',
    description:
      'Grilled steak, lettuce, tomato, fried egg, and cheddar cheese',
    price: 7,
  },
  {
    category: 'Burgers & Sandwiches',
    item: 'Grilled beef and mushroom burger ',
    description:
      'Grilled pepper steak, lettuce, tomato, onion, savory mushrooms, and cheddar cheese',
    price: 7,
  },
  {
    category: 'Burgers & Sandwiches',
    item: 'Philadelphia cheese steak sandwich with chips',
    description:
      'Fajita beef, cream cheese and cheddar cheese on ciabatta crostini',
    price: 6,
  },
  {
    category: 'Burgers & Sandwiches',
    item: 'Tuna melt sub. With chips ',
    description: 'Savory tuna with mayo, green pepper, onion',
    price: 7,
  },
  {
    category: 'Burgers & Sandwiches',
    item: 'Chicken mayo sandwich with chips ',
    description: 'Savory chicken with mayonnaise, celery, onion and lettuce',
    price: 6,
  },
  {
    category: 'Burgers & Sandwiches',
    item: 'Silver Star special club sandwich with chips ',
    description:
      'Double decker chicken, meat, eggs, onion, tomato, lettuce and cheddar cheese',
    price: 8,
  },
  {
    category: 'Pizza',
    item: 'Large Pizza ',
    price: 15,
  },
  {
    category: 'Pizza',
    item: 'Medium Pizza ',
    price: 12,
  },
  {
    category: 'Pizza',
    item: 'Small Pizza ',
    price: 8,
  },
  {
    category: 'Pizza',
    item: 'Extra cheese ',
    price: 1,
  },
  {
    category: 'Pizza',
    item: 'Pizza magharita bassilico large',
    description:
      'Tomato, provencale sauce, diced pineapple, sweetcorn, beef pepperoni, mozzarella cheese',
    size: 'L-15, M-12, S-8',
    price: 15,
  },
  {
    category: 'Pizza',
    item: 'Hawaiian pizza Large',
    description:
      'Provencale sauce, diced pineapple, sweetcorn, beef pepperoni, mozzarella cheese',
    size: 'L-15, M-12, S-8',
    price: 15,
  },
  {
    category: 'Pizza',
    item: 'Vegetarian pizza ',
    description:
      'Provencale sauce, artichoke, sliced onion, sliced mushrooms, fresh diced tomatoes, spinach, zucchini, fresh diced green pepper, black olives mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'Pizza',
    item: 'Four seasons pizza ',
    description:
      'Provencale sauce, sliced onions, fresh diced green pepper, sliced mushrooms, pepperoni, fresh diced tomatoes, and mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'Pizza',
    item: 'Chicken barbeque pizza ',
    description:
      'Provencale sauce, sliced onions, sliced mushrooms, diced chicken, sweet barbeque sauce and mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'Pizza',
    item: 'Chicken mushroom pizza',
    description:
      'Provencale sauce, sliced onions, sliced mushrooms, diced chicken, sweet barbeque sauce and mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'Pizza',
    item: 'Sweet and sour chicken',
    description:
      'Provencale sauce, diced chicken diced pineapple, fresh diced green pepper sweet n’ sour sauce, mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'Pizza',
    item: 'Club pizza',
    description:
      'Provencale sauce, diced chicken, ground beef, gravey rave sauce, mozzarella cheese',
    size: 'L-15, M-12, S-8',
  },
  {
    category: 'Pizza',
    item: 'Something meaty pizza',
    description:
      'Provencale sauce, pepperoni slices, diced tomatoes, green pepper, black olives, mozzarella cheese',
  },
  {
    category: 'Pizza',
    item: 'Calzone pizza  (fold over)',
    description:
      'Cream cheese, sliced onions, sliced mushrooms, pepperoni slices, diced tomatoes, green pepper, black olives, mozzarella cheese',
    size: 'Only Large',
    price: 15,
  },
  {
    category: 'Indian Cuisine',
    item: 'Biryani Chicken',
    description:
      'Fresh chicken and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
    price: 10,
    image: 'Copy of DSC09435.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Biryani Fish',
    description:
      'Fresh Fish and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
    price: 10,
    image: 'Copy of DSC09435.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Biryani Meat',
    description:
      'Fresh Meat and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
    price: 10,
    image: 'Copy of DSC09435.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Malai chicken tikka / fish',
    description:
      'Marinate the chicken thighs in ginger garlic paste, yogurt and grated cheese, cashew paste, cream, salt, pepper smoky sharp flavor… Mixed Tanduri platar Smoll Platter consisting of four types of mixed kebabs including two pess banjara kebabs , two malai.chicken tikka, two fish tikka and one peri peri. Legs',
    price: 8,
    image: 'Copy of DSC09391.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Silver special tandoori Platter',
    description:
      'Plater consisting of six types of mixed kebabs including two banjara kebabs,and two malai tikka , two fish tikka, Two Peri Peri Chicken Tikka, Two Mutton Kebab and ,Two Piece Kalmi Kebab Legs…all time your favorite',
    price: 20,
    image: 'Copy of DSC09360.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Chicken /fish curry',
    description:
      'Made by simmering chicken in fresh ground indian spice powder and onion Tamato gravy delicious taste garnish green coriander.and fresh cooking cream',
    price: 8,
    image: 'Copy of DSC09416.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Butter chicken',
    description:
      'Marinated chicken is grilled in a tandoor simmered in a rich creamy and butter tomato gravy all time favorite',
    price: 8,
    image: 'Copy of DSC09405.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Chicken kadai / fish',
    description:
      'Spicy tomato masala sauce made with julienne Red Green Yellow Capsicum onion Cumin Coriander Seeds Red Chilli freshly ground spices”spicy dish and is traditionally made in a cast iron wok',
    price: 8,
    image: 'Copy of DSC09425.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Chicken, Mutton, Fish biryani',
    description:
      'Fresh chicken and aromatic basmati rice Layered, dum cooked with Indian spices garnished with crispy fried onions, served with raita',
    price: 10,
  },
  {
    category: 'Indian Cuisine',
    item: 'Egg fried rice',
    description:
      'Cooked basmati rice, and mix egg, vegetable and tossed with all chinese souce',
    price: 4,
    image: 'Copy of DSC09489.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Chicken Chili',
    description:
      'Finger cut frish chicken and marinated with deep fried and cooked with garlic, capcicum, onion and tossed with chinese souce',
    price: 6,
    image: 'Copy of DSC09395.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Garlic nan',
    description:
      'White flour stuffed garlic and green coriander on a traditional flat bread from India. Normally baked inside hot Tandoor ovens with charcoal or wood fire',
    price: 1.5,
  },
  {
    category: 'Indian Cuisine',
    item: 'Butter nan',
    description:
      'White flour stuffed black white sesame and green coriander on a traditional flat bread from India. Normally baked inside hot Tandoor ovens with charcoal or wood fire',
    price: 1.5,
    image: 'Copy of DSC09462.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Tanduri bread',
    description:
      'Flat breads made with whole wheat flour and cooked in a tandoor, a clay oven',
    price: 1.5,
    image: 'Copy of DSC09451.JPG',
  },
  {
    category: 'Indian Cuisine',
    item: 'Indian chapati',
    description:
      'Flour mixed salt and sugar Triangle shaped flatbread made from wheat flour and cooked in a pan',
    price: 1,
    image: 'Copy of DSC09451.JPG',
  },
  {
    category: 'Pastries',
    item: 'Vanilla cake (eggs)',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Plain croissant. (eggs)',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Cinnamon $ raisin roll.',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Chocolate croissant.',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Almond croissant.',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Assorted cookies.',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Black forest gateau (egg)',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'White forest gateau. (egg)',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Oreo cheese cake',
    price: 4,
  },
  {
    category: 'Pastries',
    item: 'Lotus cheese cake',
    price: 4,
  },
  {
    category: 'Pastries',
    item: 'Tiramisu cheese cake.',
    price: 4,
  },
  {
    category: 'Pastries',
    item: 'Date cake eggless.',
    price: 4,
  },
  {
    category: 'Pastries',
    item: 'Strawberry cake (eggless)',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Marble cake.(eggs)',
    price: 4,
  },
  {
    category: 'Pastries',
    item: 'Fruit cake.',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Black magic',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Cup cakes – vanilla, chocolate, strawbwrry.',
    price: 1.5,
  },
  {
    category: 'Pastries',
    item: 'Swiss roll.',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Apple pie',
    price: 4,
  },
  {
    category: 'Pastries',
    item: 'Chicken pie',
    price: 5,
  },
  {
    category: 'Pastries',
    item: 'Sweet corn cheese pie',
    price: 4,
  },
  {
    category: 'Pastries',
    item: 'Small doughnuts',
    price: 1,
  },
  {
    category: 'Pastries',
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
