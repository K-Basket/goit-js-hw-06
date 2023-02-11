const categoriesRef = document.querySelectorAll('.item');

const totalCategories = elements => {
  console.log(`Number of categories: ${elements.length}`);

  elements.forEach(category => {
    const categoryRef = category.firstElementChild.textContent;
    console.log(`Category: ${categoryRef}`);

    const elementsRef = category.lastElementChild.children.length;
    console.log(`Elements: ${elementsRef}`);
  });
};

totalCategories(categoriesRef);
