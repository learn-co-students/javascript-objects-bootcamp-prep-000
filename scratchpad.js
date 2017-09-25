var meals = { breakfast: "oatmeal"};

//or, equivalently

var meals = new Object({ breakfast: 'oatmeal' });

// after the following code breakfast in 'meals' would be bacon.
//KEYS MUST BE UNIQUE
var meals = {
  breakfast: 'eggs',
  breakfast: 'bacon'
}

//VALUES DO NOT NEED TO BE UNIQUE
var meals = {
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avocado'
}

const firstMeal = 'breakfast';

var meals = {[firstMeal]: 'oatmeal' }

//access the values in an object using dot notation
//during dot notation you DO NOT wrap the key in quotes
meals.breakfast; // oatmeal

//or square bracket notation
meals['breakfast']; //oatmeal

//additionally we could call like this which is equal to breakfast
meals[firstMeal]; // 'oatmeal'

var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

//new value
meals.snack = 'yogurt';

//we can access the new value as before
meals.snack //yogurt
meals['snack'] //yogurt
meals.lunch // burrito

// we can add key-value pairs using bracket notation

meals['second breakfast'] = 'bagel';

var sweetMeal = 'desert';

meals.desert = 'cake'; //cake
meals[sweetMeal] //cake

meals.breakfast = 'cereal'

//-----------------------------------------------------
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
//we must merge everything into aan empty object such as {}
//or the objects obj will be modified

const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, chocolate: '1 Cup')
//returns {eggs: 3, chocolate: '1 cup'}

recipe // { eggs: 3 }


//-------shorter form of the above function

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

// how to delete a key-value pair
var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };

delete meals.dinner; //true

meals;
//returns { breakfast: "oatmeal", lunch: "turkey sandwich" }


//destructive update
var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};
meals.breakfast = ["oatmeal", "banana"];

meals;

// {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }

//non-destructive update

var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};

Object.assign({}, meals, { breakfast: ['oatmeal', 'banana']})
// returns {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }

 meals
 // still {
//   breakfast: "oatmeal",
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
// };
