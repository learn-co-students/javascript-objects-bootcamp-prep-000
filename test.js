console.log(Object.assign({}, {foo: 'bar'}));
/* The power of Object.assign allows us to rewrite the above update function in a non-destructive way: */
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign(targetObject, updatesObject)
}

var playlist = {'Ariana Grande': 'Break Free'};
var ayo = Object.assign({}, playlist, {'Sia': 'Chandelier'});
console.log(ayo);
console.log(playlist);
