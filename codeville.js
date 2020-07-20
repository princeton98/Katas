function chooseRecipe(bakeryA, bakeryB, recipes) {
  //find recipe that utilitzes one ingredient from bakeryA and bakeryB
  //can be in random order
  //search first array, compare it to recipe arr,
    //if found, switch to next bakery
  for (let i = 0; i < recipes.length; i++) {

    for (let ingredientA of bakeryA) {
      if (ingredientA === recipes[i].ingredients[0] || ingredientA === recipes[i].ingredients[1]) {
        for (let ingredientB of bakeryB) {
          if (ingredientB === recipes[i].ingredients[0] || ingredientB === recipes[i].ingredients[1]) {
            return recipes[i].name
          }
        }
      }
    }
  }
  return "None"
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));