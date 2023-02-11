const categoriesRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(category => {
  const categoryRef = category.firstElementChild.textContent;
  console.log(`Category: ${categoryRef}`);

  const elementsRef = category.lastElementChild.children.length;
  console.log(`Elements: ${elementsRef}`);
});
