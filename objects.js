// function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
//   obj[key] = value
//   return obj
// }

// const recipe = {
//   eggs: 3
// }

// destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

// Object.assign({}, {foo: 'bar'})

// Object.assign({eggs: 3 }, { flour: '1 cup'})

// Object.assign({eggs: 3}, {chocolate: '1 cup'}, {flour: '1/2 cup'})

// function updateObjectWithKeyAndValue(obj, key, value){
//   return Object.assign({}, obj, {[key]: value})
// }

// function updatedObjectWithObject(targetObject, updatesObject){
//   return Object.assign({}, targetObject, updatesObject)
// }

// var meals = {
//   breakfast: 'oatmeal',
//   lunch: 'turkey sandwich',
//   dinner: 'steak and potatoes'
// };
// delete meals.dinner;

// meals.breakfast = ['oatmeal', 'banana']

// Object.assign({}, meals, ['oatmeal', 'banana'])

var playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]: songTitle})
};

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist{}
};











