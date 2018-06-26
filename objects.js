var sweetMeal = 'dessert';
var meals = {sweetMeal : 'cake'};

alert(meals.dessert + meals[sweetMeal]);

var playlist = {
  MJ : 'Hey',
  Bey : 'Hello'
};

function updatePlaylist(obj, name, title)
{
  Object.assign({}, obj, {[name]: title});
}

function removeFromPlaylist(obj, name)
{
  delete obj.name;
}