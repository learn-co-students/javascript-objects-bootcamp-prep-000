var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
<<<<<<< HEAD
}
=======
}
>>>>>>> de7e46b2009e6bdb989e6e135db785aa645253e8
