const categoriesList = document.querySelector(`#categories`).children;
const amountItem = categoriesList.length;
console.log(`Number of categories: ${amountItem}`);

for (const iterator of categoriesList) {
  const nameCategory = iterator.querySelector(`h2`).textContent;
  const elementsCategory = iterator.querySelector(`ul`).children.length;
  console.log(`Category:${nameCategory}`);
  console.log(`Elements:${elementsCategory}`);
}
