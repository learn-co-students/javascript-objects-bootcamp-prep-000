var meals = new Object({breakfast: oatmeal});

meals['second breakfast'] = 'bagel';

//Object.assign:
Object.assign({}, {foo: 'bar'});

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

const recipe = { eggs: 3 };

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup');

//deleting pairs:
var meals = { breakfast: 'oatmeal', lunch: 'turkey sandwich', dinner: 'steak and potatoes' };

delete meals.dinner;
//or
delete meals['dinner'];

//changing values:
var meals = {
  breakfast: 'oatmeal',
  lunch: 'turkey sandwich',
  dinner: 'steak and potatoes',
};
meals.breakfast = ['oatmeal', 'banana'];

//changing values with Object.assign (non-destructive):
Object.assign({}, meals, {breakfast: ['oatmeal', 'banana'] });

let playlist = { 
  'Toto': 'Africa', 
  'David Bowie': 'Star Man', 
  'Macintosh Plus': 'Lisa Frank 420', 
};

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
}