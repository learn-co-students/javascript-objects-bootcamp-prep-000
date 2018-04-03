var array = [];
var object = {};

const firstMeal = "breakfast";

var e = {
  firstMeal: "oatme"
};

var q = {
  [firstMeal]: "A"
};


var meals = { breakfast: "oatmeal"};

var mealsTwo = new Object({
  dinner: "pasta"
});

var mealsThree = {
  breakfast: "water",
  breakfast: "air"
};

var mealsFour = {
  breakfast: "a",
  lunch: "a",
  dinner: "a"
};

var test = {
  1: "string or number accessssSS"
};


function p() {
  var i = 0;
  for (i; i < arguments.length; i = i+1) {
    console.log(arguments[i]);
  }
}



function dUOWKAV(object, key, value) {
  object[key] = value;
  return object;
}

function UOWKAV(object, key, value) {
  return Object.assign({}, object, {[key]:value});
}

UOWKAV()



var jsMeals = {
  breakfast: "oatmeal",
  lunch: "chickpeas",
  dinner: "quinoa lentils"
};

jsMeals.snack = "air";

jsMeals["second breakfast"] = "nothing";


jsMeals.snack = "wateR";

delete jsMeals.snack;
p(jsMeals);








