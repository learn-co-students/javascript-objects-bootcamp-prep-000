//var meals={};
//var meals=new object();
var meals ={breakfast:"oatmeal"};
var meals=new Object({breakfast:"oatmeal",breakfast:"bacon"});
//console.log(meals.breakfast);

var firstMeal ='breakfast';
var meals={[firstMeal]:'spagetti'};
console.log(meals.firstMeal);
console.log(meals.breakfast);
console.log(meals[firstMeal]);
console.log(meals['breakfast']);

meals.snack="yoghurt";
console.log(meals.snack);
console.log(meals['snack']);
meals.lunch='burrito';
var two='second breakfast'
meals={[two] :'bageli'};
console.log(meals['second breakfast']);
console.log(meals[two]);

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
 obj[key]=value
 return obj
}

const recipe={eggs:3}
console.log(destructivelyUpdateObjectWithKeyAndValue(recipe,'flour','2 cups'))
console.log('original changed:',recipe);

function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({},obj,{[key]:value});
}

const recipe2={eggs:2}
console.log(updateObjectWithKeyAndValue(recipe2,'flour','3 cups'));
console.log('original changed:',recipe2);

 recipe.butter = '2 tbsp'
console.log(recipe);
delete recipe.butter;
console.log(recipe);

recipe.flour =["3 cups white","2 cups wheat"]
console.log(recipe);

console.log(Object.assign({},recipe,{salt:['1/8 tsp']}));
console.log(recipe);

var playlist ={amir:['pk'],shahruk:['dilwale'],salman:['wanted']};
console.log(playlist);

function updatePlaylist(playlist,artistName,songTitle){
   playlist[artistName]=songTitle;
  return playlist;
}

console.log('updated list',updatePlaylist(playlist,'Phil Ochs',"Here's to the State of Mississippi"));
updatePlaylist(playlist,'Kanye',"Gold Digger");
console.log(playlist);

function removeFromPlaylist(playlist,artistName){
 delete playlist[artistName];
 return playlist;
}

removeFromPlaylist(playlist,'Kanye');
console.log('after removing',playlist);
