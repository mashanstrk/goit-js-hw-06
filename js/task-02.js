const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

// console.log(...ingredientsItems)

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsItems);