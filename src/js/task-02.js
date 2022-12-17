const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsList = document.querySelector('#ingredients');

// const makeListItem = ingredients => {
//   return ingredients.map(elem => {
//     const ingredientsItem = document.createElement('li');
//     ingredientsItem.classList.add('item');
//     ingredientsItem.textContent = elem;
//     return ingredientsItem;
//   });
// };

// const items = makeListItem(ingredients);
// ingredientsList.append(...items);

const ingredientsList = document.querySelector(`#ingredients`);
const ingredientsItem = []
for (const iterator of ingredients) {

  const li = document.createElement(`li`);
  li.classList.add(`item`);
  li.textContent = iterator;
  ingredientsItem.push(li)
};
ingredientsList.append(...ingredientsItem)