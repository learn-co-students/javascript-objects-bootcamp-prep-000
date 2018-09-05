/* var meals = {};

var meals = new Object({ breakfast:'oatmeal' });

meals.lunch = 'burrito';
meals.dinner= 'steak';
meals.snack = 'yogurt';
meals['secondbreakfast'] = 'bagel';

console.log(meals);

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

const recipe = { eggs: 3 }
 
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

console.log(recipe);

Object.assign({}, {foo: 'bar'})
Object.assign({eggs: 3}, {flour: '1 cup'})
Object.assign({ eggs: 3 }, { chocolate: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' })

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}

const recipe = { eggs: 3 }
 
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}
*/

var playlist = {beatles: 'hey jude', stones: 'brown sugar'};

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist) {
  delete playlist[artist];
  return playlist;
}
