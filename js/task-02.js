const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.createElement('ul');

const liListRef = ingredients.map((name) => {
  const item = document.createElement('li');
  item.textContent = name;
  item.classList.add('item')
  return item;
});

ulRef.append(...liListRef);
console.log(ulRef);

document.body.append(ulRef);

