// Creating Objects
var meals = {}
// var meals = new Object(); // Object Contructor

var meals = { breakfast: "oatmeal" }; // breakfast is the key, oatmeal is the value
var meals = new Object({ breakfast: 'oatmeal' });

// all keys in JavaScript objects are strings (!!!)
// {1: 'is the loneliest number'}; // 1 gets turned into string '1'

// keys must be unique (!!!)
var meals = {
  breakfast: 'eggs',
  // breakfast: 'bacon'
}

meals // { breakfast: 'bacon'}

// values don't have to be unique
var meals = {
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avocado'
}

const firstMeal = 'breakfast';
var meals = { firstMeal: 'oatmeal' };
meals // { firstMeal: "oatmeal" }

// using variables as object keys
var meals = { [firstMeal]: 'oatmeal' };
meals // { breakfast: 'oatmeal' }

// accessing values in an object
// dot notation
meals.breakfast // 'oatmeal'

// square-bracket notation
meals['breakfast'] // 'oatmeal'
meals[firstMeal] // 'oatmeal'

meals.firstMeal // undefined

// DOT NOTATION TAKES KEY AS LITERAL STRING
// MUST USE BRACKET NOTATION FOR VALUES THAT BELONG TO VARIABLE KEY

// Adding to An Object
var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

meals.snack = 'yogurt';

meals.snack // 'yogurt'
meals['snack'] // 'yogurt'
meals.lunch // 'burrito'

// add key-value pairs using bracket notation:
meals['second breakfast'] = 'bagel';

// use variables as keys this way:
var sweetMeal = 'dessert';
meals[sweetMeal] = 'cake';
meals.dessert // 'cake'
meals[sweetMeal] // 'cake'

// update existing key-value pairs by using the key:
meals.breakfast = 'cereal';

// Destructively Updating an Object
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

const recipe = { eggs: 3 };

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups'); // { eggs: 3, flour: '3 cups' }
recipe // { eggs: 3, flour: '3 cups' }

// Object.assign()
// create new object & pass it properties from existing objects
// first value is target object that gets modified
// all values afterward can be any number of objects
// copies from left to right onto target objects
// if two objects share a key, right-most object's value for that key will win

Object.assign({}, { foo: 'bar' }); // { foo: 'bar' }
Object.assign({ eggs: 3 }, { flour: '1 cup' }) // { eggs: 3, flour: '1 cup' }
Object.assign({ eggs: 3 }, { chocolate: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' }); // { eggs: 3, chocolate: '1 cup', flour: '1/2 cup' }

// update function in a non-destructive way:
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}
// merge everything into a new object: empty {}
// Otherwise, the object obj will be modified

// const recipe = { eggs: 3 };

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup'); // `{ eggs: 3, choclate: '1 cup' }`

recipe // { eggs: 3 }

// make update function terser
function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject);
}

// Deleting a Key-Value Pair
var meals = {
  breakfast: 'oatmeal',
  lunch: 'turkey sandwich',
  dinner: 'steak and potatoes'
};

// delete operator returns true if it's successfully deleted, false otherwise

delete meals.dinner; // true

meals; // { breakfast: 'oatmeal', lunch: 'turkey sandwich' }

// Changing a Value
var meals = {
  breakfast: 'oatmeal',
  lunch: 'turkey sandwich',
  dinner: 'steak and potatoes'
};

meals.breakfast = ['oatmeal','banana'];

meals; // { breakfast: ['oatmeal', 'banana'], lunch: 'turkey sandwich', dinner: 'steak and potatoes' }

// Change a balue non-destructively using Object.assign:
var meals = {
  breakfast: 'oatmeal',
  lunch: 'turkey sandwich',
  dinner: 'steak and potatoes'
};

Object.assign({}, meals, { breakfast: ['oatmeal', 'banana'] }) // { breakfast: ['oatmeal', 'banana'], lunch: 'turkey sandwich', dinner: 'steak and potatoes' }

meals; // { breakfast: 'oatmeal', lunch: 'turkey sandwich', dinner: 'steak and potatoes' };

// INSTRUCTIONS
var playlist = { artistName: "songTitles" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}