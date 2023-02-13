const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elements = ingredients.map(el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = el;
  itemRef.classList.add('item');

  return itemRef;
});

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...elements);
