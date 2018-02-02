var meals = {};
  //   var meals = new Object();

var meals = { breakfast: "oatmeal" };
  // var meals = new Object({ breakfast: "oatmeal" })

var meals = {
  breakfast: 'scrambled tofu',
  breakfast: 'fried potatoes'
    //'breakfast' key will only return the most recent value (in this case, fried potatoes)
};

const firstMeal = 'breakfast';
var meals = { [firstMeal]: 'oatmeal' };
  // { breakfast: 'oatmeal' }

meals.breakfast; 
  // 'oatmeal'

meals['breakfast'];
  // 'oatmeal'

meals[firstMeal];
  //'oatmeal'

meals.lunch = 'burrito';
meals.dinner = 'veggie burger';
meals.snack = 'yogurt';
  // adds a lunch, dinner, and snack key to the meals object with the corresponding values

meals.snack; 
  // returns 'yogurt'

meals['snack']; 
  // returns 'yogurt'

meals.lunch; 
  // returns 'burrito'
  
var sweetMeal = 'dessert';
  
meals[sweetMeal] = 'cake';
  //adds sweetMeal key to meals object with 'cake' value
  
meals.breakfast = 'cereal';
  //can also update existing key-value pair

//the above methods are destructive, 
//meaning the updated key-value pairings will replace previous 
//iterations of the object and key-value pairs.
//Example below:

function
destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  
  return obj;
}
//defines function to destructively update objects

const omniRecipe = { eggs: 3};
  //creates object recipe with KEY eggs and VALUE 3 

destructivelyUpdateObjectWithKeyAndValue(omniRecipe, 'flour', '3 cups');
  //returns { eggs: 3, flour: '3 cups' }
  
omniRecipe;
  //returns { eggs: 3, flour: '3 cups' } showing that the original has been changed with no copy
  
//TO CREATE A NEW OBJECT THAT INHERITS PROPERTIES FROM EXISTING OBJECTS USE Object.assign()
//Examples below

function updateObjectWithKeyAndValue(obj, key, value) {
  
  return Object.assign({}, obj, { [key]: value });
}    //it is important to merge everything into a new object (the empty {} in this case) or else
     //the object being referenced will be modified
const recipe = { flaxseedEggs: 3 };

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup');
  //returns { flaxseedEggs: 3, chocolate: '1 cup' }

recipe; //returns { flaxseedEggs: 3 }

delete meals.dinner; //will return as true if the value pair associated with 'dinner'   
                     //in the meals object was deleted successfully

Object.assign({}, meals, { breakfast: ['oatmeal', 'banana'] });
    //returns a new copy of the meals object with the amended breakfast values; meals will still return the original values

const artistName =  'artist';
const songTitle = 'title';
var playlist = { 
  [artistName]: [songTitle]
}; 

function updatePlaylist(obj, key, value) {
 return Object.assign({}, obj, { [key]: value });
}
function removeFromPlaylist(obj, key) {
  delete playlist[artistName];
  return playlist;
}

