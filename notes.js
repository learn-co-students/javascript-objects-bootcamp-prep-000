var meals = {
  breakfast: 'oatmeals',
  lunch: 'burrito',
  dinner: 'steak',
};

firstMeal = 'breakfast';

meals.snack = 'yogurt';

function destructiveUpdateObjectWithKeyandValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

const recipe = {
  eggs:3,
};

destructiveUpdateObjectWithKeyandValue(recipe, 'flour', '3 cups')

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

 var recipe2 = updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
 console.log(recipe2)
 console.log(recipe)
 
 
 function updateObjectWithObject(targetObject, updatesObject) {
   return Object.assign({}, targetObject, updatesObject)
 }

var otherrecipe = {
  eggs:2
};

var recipe3 = updateObjectWithObject(recipe, otherrecipe)
console.log(recipe3)
console.log(recipe)

delete recipe3.eggs
console.log(recipe3)







 
 
  