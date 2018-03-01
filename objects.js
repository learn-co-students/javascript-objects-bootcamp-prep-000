function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]:value});
}

const recipe = {eggs: 3};
console.log(updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup'));
console.log(recipe);

var playlist = {
  an: 'rain',
  kwon: 'snow',
  kim: 'ski'
}

function updatePlaylist(obj, key, value){
  return Object.assign({}, obj, {[key]:value});
}

console.log(updatePlaylist(playlist, 'park', 'glass'));

function removeFromPlaylist(obj, key){
  delete obj[key];
  return obj;
}

console.log(removeFromPlaylist(playlist, 'kwon'));

