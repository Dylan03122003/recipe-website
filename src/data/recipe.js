import avatar2 from "./../assets/img/avatar2.png";
import food1 from "./../assets/img/food1.png";
import food2 from "./../assets/img/food2.png";
import food3 from "./../assets/img/food3.png";

const recipe1 = {
  recipeID: 1,
  foodName: "Big and Juicy Wagyu Beef Cheeseburge",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ingredients: {
    mainDish: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    sauce: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  directions: [
    {
      stepID: 1,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 2,
      title: "titile",

      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 3,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe2 = {
  recipeID: 2,
  foodName: "Big and Juicy Wagyu Beef Cheeseburge",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ingredients: {
    mainDish: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    sauce: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  directions: [
    {
      stepID: 1,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 2,
      title: "titile",

      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 3,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe3 = {
  recipeID: 3,
  foodName: "Strawberry Oatmeal Pancake with Honey Syrup",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ingredients: {
    mainDish: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    sauce: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  directions: [
    {
      stepID: 1,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 2,
      title: "titile",

      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 3,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe4 = {
  recipeID: 4,
  foodName: "Fresh and Healthy Mixed Mayonnaise Salad",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ingredients: {
    mainDish: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    sauce: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  directions: [
    {
      stepID: 1,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 2,
      title: "titile",

      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 3,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

export const recipesDetailData = [recipe1, recipe2, recipe3, recipe4];
