# JavaScript Hashes

## Objectives
+ Explain what a hash in JavaScript is
+ Create a hash in JS
+ Access a value from a hash
+ Add a key-value pair to a hash
+ Delete a key-value pair from a hash

## Intro 

In JavaScript, all objects are effectively key-value pairs. We're not going to talk about objects in relation to Object Orientation, but objects as hashes. We will eventually get to objects and properties of objects, but right now we're just focused on how to create, manipulate and delete key-value pairs from a "hash".

From here on out, we'll be referring to a hash as an object. Every time you see the word "object" think "hash".


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

## Adding To An Object

Now that we have an empty object, it's time to start adding key-value pairs:

```js
var meals = {}
meals["breakfast"] = "oatmeal"
meals["lunch"] = "turkey sandwich"
meals["dinner"] = "steak and potatoes"
```

## Accessing A Value
Just like in Ruby, we access the value of an object from it's key:

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
//returns {breakfast: "oatmeal and banana", lunch: "turkey sandwich", dinner: "teak and potatoes"}
```
