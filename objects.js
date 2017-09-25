var meals = {};
var meals = new Object();

var meals = { breakfast: "oatmeal" };

// or, equivalently

var meals = new Object({ breakfast: 'oatmeal' })

var meals = {
  breakfast: 'eggs',
  breakfast: 'bacon'
}

{ breakfast: 'bacon' }

var meals = {
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avocado'
}

var meals = { [firstMeal]: 'oatmeal' }

meals.breakfast // 'oatmeal'

meals['breakfast'] // 'oatmeal'

meals[firstMeal] // 'oatmeal'

var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

meals.snack = 'yogurt';

meals.snack // 'yogurt'
meals['snack'] // 'yogurt'
meals.lunch // 'burrito'

meals['second breakfast'] = 'bagel'

var sweetMeal = 'dessert'

meals[sweetMeal] = 'cake';

meals.dessert // 'cake'
meals[sweetMeal] // 'cake'

meals.breakfast = 'cereal'

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

const recipe = { eggs: 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
// returns { eggs: 3, flour: '3 cups' }

// but also:

recipe // { eggs: 3, flour: '3 cups' }



Object.assign()


Object.assign({}, { foo: 'bar' })
// { foo: 'bar' }

Object.assign({ eggs: 3 }, { flour: '1 cup' })
// { eggs: 3, flour: '1 cup' }

Object.assign({ eggs: 3 }, { chocolate: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' })
// { eggs: 3, chocolate: '1 cup', flour: '1/2 cup' }


function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}
  // it's important that we merge everything into
  // a new object such as the empty {}.
    // Otherwise, the object obj will be modified.
    // Test what happens if this line was written as:
    // return Object.assign(obj, { [key]: value })

const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
// returns `{ eggs: 3, chocolate: '1 cup' }`

recipe // { eggs: 3 }

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };

// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise
delete meals.dinner; // true

meals;
// returns { breakfast: "oatmeal", lunch: "turkey sandwich" }

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

var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};


Object.assign({}, meals, { breakfast: ['oatmeal', 'banana'] })
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

function playlist() {

}

function updatePlaylist() {

}

function removeFromPlaylist(playlist, artistName) {
return `playlist`
}
