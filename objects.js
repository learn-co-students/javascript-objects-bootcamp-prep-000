const firstMeal = 'breakfast'
var meal = { [firstMeal]: 'oatmeal' } // ={ breakfast: 'oatmeal' }

meal.breakfast     // 'oatmeal'
meal['breakfast']  // 'oatmeal'
meal[firstMeal]    // 'oatmeal'

var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

meals.snack = 'yogurt';

meals.snack       // 'yogurt'
meals['snack']    // 'yogurt'
meals.lunch       // 'burrito'

meals['second breakfast'] = 'bagel'

var sweetMeal = 'dessert'
meals[sweetMeal] = 'cake';
 
meals.dessert     // 'cake'
meals['dessert'] 
meals[sweetMeal]  // 'cake'

meals.breakfast = 'cereal'

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
const recipeA = { eggs: 3 }
destructivelyUpdateObjectWithKeyAndValue(recipeA, 'flour', '3 cups')
                  // returns { eggs: 3, flour: '3 cups' }
                  // but also:
recipeA            // { eggs: 3, flour: '3 cups' }


Object.assign({}, { foo: 'bar' })     // { foo: 'bar' }
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
 
recipe            // { eggs: 3 }

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}


var meals1 = { 
  breakfast: "oatmeal", 
  lunch: "turkey sandwich", 
  dinner: "steak and potatoes" 
};
 
// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise

delete meals1.dinner;          // true
 
meals1;
// returns { breakfast: "oatmeal", lunch: "turkey sandwich" }


var meals2 = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};

meals2.breakfast = ["oatmeal", "banana"];
 
meals2;
// {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }

var meals3 = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};
 
 
Object.assign({}, meals3, { breakfast: ['oatmeal', 'banana'] })
// returns {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }
 
 
meals3
// still {
//   breakfast: "oatmeal",
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
// };

var playlist = {
  keys: '0'
}

function updatePlaylist(playlist, artistName, songTitle)
{
   playlist[artistName] = songTitle
   return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName]
  return playlist
}