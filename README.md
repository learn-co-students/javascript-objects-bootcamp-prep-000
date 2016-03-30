# JavaScript "Hashes"

## Objectives
+ Explain what a hash in JavaScript is
+ Create an object in JS
+ Access a value from an object
+ Add a key-value pair to an object
+ Delete a key-value pair from an object
+ Iterate over key-value pairs in an object

## Intro 

In JavaScript, all objects are effectively key-value pairs. We're not going to talk about objects in relation to Object Orientation, but objects as hashes. We will eventually get to objects and properties of objects, but right now we're just focused on how to create, manipulate and delete key-value pairs from a "hash". 

JavaScript Objects behave sort of like a cross between Classes and Hashes in Ruby. For now, we're just going to focus on how to use them like a hash. From here on out, we'll be referring to a hash as an object. Every time you see the word "object" think "hash".



## Creating Objects

You can create an object in two different ways, with the literal syntax and with the new Object constructor.

Literal Syntax:
```js
var meals = {};
```

Object Constructor:
```js
var meals = new Object();
```

You can also create an object with key-value pairs:

```js
var meals = {breakfast: "oatmeal"};
```

Note that JavaScript does not have `=>` syntax. You mark a key with `:` and set the value directly after.

## Adding To An Object

Now that we have an empty object, it's time to start adding key-value pairs:

```js
var meals = {}
meals["breakfast"] = "oatmeal"
meals["lunch"] = "turkey sandwich"
meals["dinner"] = "steak and potatoes"
```

## Accessing A Value
Just like in Ruby, we access the value of an object from its key:

```js
var meals = {breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes"}
meals["breakfast"] //returns "oatmeals"
meals["lunch"] // returns "turkey sandwich"
meals["dinner"] // returns "steak and potatoes"
```

## Deleting A Key-Value Pair

Let's say it's only 5pm and we haven't actually eaten dinner yet, so we want to delete the dinner key-value pair:

```js
var meals = {breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes"};
delete meals["dinner"];
meals;
//returns {breakfast: "oatmeal", lunch: "turkey sandwich"}
```
## Changing A Value


Let's say we actually ate oatmeal and a banana for breakfast, and we want to update the value the `breakfast` key is storing:

```js
var meals = {breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes"};
meals["breakfast"] = "oatmeal and banana";
meals;
//returns {breakfast: "oatmeal and banana", lunch: "turkey sandwich", dinner: "steak and potatoes"}
```

## Check Empty Object

Unlike Ruby, JavaScript does not have a handy `.empty?` convenience method. But, you can check to see if your object is empty by using `Object.keys(yourObject)` which returns an array of all the keys in your object. 

```js
var meals = {breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes"};
Object.keys(meals);
//returns ["breakfast", "lunch", "dinner"]
```

You can also count the number of key-value pairs by doing something like this:

```js
var meals = {breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes"};
Object.keys(meals).length;
//returns 3
```

## Iterating Over An Object

In order to iterate over an object, we need to use a new loop, the for in loop. We'll stick with the meals object for this example. The for in loop looks something like this:

```js
for (variable in object) {
  // code to be executed goes here
}
```
In this case, we want to iterate over every key value pair, so our variable is `key` and our object is `meals`. JavaScript will automagically take every key in the hash in turn and print out in the console, `"for breakfast I ate oatmeal"`, `"for lunch I ate turkey sandwich"`, `"for dinner I ate steak and potatoes"`.


```js
var meals = {breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes"};
for (var key in meals) {
  console.log("for " + key + " I ate " + meals[key]);
}
```


## Instructions

+ Create an object that is stored in the variable `myPlaylist`. The key of this object will be the artists and the values will be the song titles.

+ Create a function `addToPlaylist` which accepts three parameters: the playlist (an object), a song (a string), and an artist (a string). The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.

+ Create a function `removeFromPlaylist` which accepts two arguments (the playlist object and the artist). The body of the function should delete the key-value pair from the playlist and return the updated playlist.

+ Create a function `changePlaylistSong`, which accepts three arguments (the playlist object, the new song, and the artist name you would like to add). The body of the function should update the artist key with the new song value, and return the updated playlist.

+ Create a function `readPlaylist`, which accepts one argument (the playlist object). The function should iterate over the key-value pairs and use `console.log` to print out the playlist's artists and songs. The function should check to see if there are songs on the playlist. If there aren't any, it should print out `"your playlist is empty"`.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-hashes-readme' title='JavaScript Hashes'>JavaScript Hashes</a> on Learn.co and start learning to code for free.</p>

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-hashes-readme'>Hashes in JS</a> on Learn.co and start learning to code for free.</p>
