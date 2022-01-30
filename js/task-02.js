const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refList = document.querySelector('#ingredients')
const fun = ingredients.map(elem => {
    const ingr = document.createElement('li')
    ingr.textContent = elem
    ingr.classList.add('item')
return ingr
  })
   
    refList.append(...fun)   


