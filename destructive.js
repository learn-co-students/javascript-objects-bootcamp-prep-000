function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
const recipe = { eggs: 3 }
 
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
// returns { eggs: 3, flour: '3 cups' }
 
recipe // { eggs: 3, flour: '3 cups' }

