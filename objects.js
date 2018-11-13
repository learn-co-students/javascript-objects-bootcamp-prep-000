var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};

Object.assign(meals, { breakfast: ['oatmeal', 'apple'] });
console.log(meals);
