const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector(`#ingredients`);
const ingredientsItem = [];
for (const iterator of ingredients) {
  const li = document.createElement(`li`);
  li.classList.add(`item`);
  li.textContent = iterator;
  ingredientsItem.push(li);
}
ingredientsList.append(...ingredientsItem);
