var recipes = {
  dish: "instructions"
}
function updateObjectWithKeyAndValue(recipes, dish, instructions) {
  return Object.assign({}, recipes, {[dish]: instructions})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, dish, instructions) {
  recipes[dish] = instructions
  return recipes
}
function deleteFromObjectByKey(recipes, dish) {
  var newObj = Object.assign({}, recipes)
  delete newObj[dish]
  return newObj
}
function destructivelyDeleteFromObjectByKey(recipes, dish) {
  delete recipes[dish]
  return recipes
}
