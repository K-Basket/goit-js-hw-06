const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const makeIngredient = el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = el;
  itemRef.classList.add('item');

  return itemRef;
};

const elements = ingredients.map(makeIngredient);

const ingredientsRef = document.querySelector('#ingredients').append(...elements);
