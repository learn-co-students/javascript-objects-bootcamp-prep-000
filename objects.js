


//excericises
var playlist = {
  radiohead: "Airbag",
  nirvanna: "Lounge acts"
};

function updatePlaylist(obj, key, value){
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(obj, name){
 delete obj.name;
  return obj;
}




// non destructive updating of an object.

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

// Delete a value from an object
var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };

// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise
delete meals.dinner; // true

meals;
// returns { breakfast: "oatmeal", lunch: "turkey sandwich" }



//update a value inside an object

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


//non destructivly change a value;

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
