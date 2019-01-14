******************************************
/*Similarly, if you have a variable*/
const firstMeal = 'breakfast' 
/*and tried to create an object*/
var meals = { firstMeal: 'oatmeal' }
/*, the meals object's key would be*/
'firstMeal'
/*, not*/
'breakfast'.

 /*ES 6 provides a way to use variables as object keys — you have to wrap the key in square brackets ([]). Using the above example, you could write */
 var meals = { [firstMeal]: 'oatmeal' } 
 /*and then meals would be */
 { breakfast: 'oatmeal' }
**********************************************
/*to access values:*/
meals.breakfast // 'oatmeal'
meals['breakfast'] // 'oatmeal'
***********************************************
???
meals[firstMeal] // 'oatmeal'
meals.firstMeal //undefined
***********************************************
/*we can add new key-value pairs to objects*/
var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

