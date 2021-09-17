const desserts = [
    {
      dessert: "Chocolate Chip Cookie",
      ingredients: ["dough", "chocolate chips", "sugar"],
      instructions: {
        bakeTime: 10,
        ovenTemp: 350
      }
    },
    {
      dessert: "Cake",
      ingredients: ["cake mix", "eggs", "sugar", "milk"],
      instructions: {
        bakeTime: 120,
        ovenTemp: 375
      }
    }
   ];

/*
What we need:

Find out the bake time total for both desserts so we know when to start making the desserts
Find out the common ingredients so we know what to get more of
*/
   
const [cookie, cake] = desserts;

function bakeTimeTotal() {
  const [{instructions: {bakeTime: cookieBakeTime}}, {instructions: {bakeTime: cakeBakeTime}}] = [cookie, cake]
  return cookieBakeTime + cakeBakeTime;
}

function commonIngredientFinder() {
  const {ingredients: [...cookieIngredients]} = cookie
  const {ingredients: [...cakeIngredients]} = cake
  const commonIngredients = cookieIngredients.filter(element => cakeIngredients.includes(element));
  return commonIngredients;
}

console.log(bakeTimeTotal());
console.log(commonIngredientFinder());