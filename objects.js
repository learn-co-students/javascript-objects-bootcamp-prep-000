var playlist = {'Elvis Presley' : "Blue Christmas", Aerosmith: "Dream On", tenthAvenueNorth: "You Are More"};

function updatePlaylist (theirPlaylist, nameOfArtist, titleOfSong) {
  return Object.assign(theirPlaylist, {[nameOfArtist]: titleOfSong});
  /* This works, too:
  theirPlaylist[nameOfArtist] = titleOfSong;
  return theirPlaylist; */
  // Remember to enclose any variable keys in brackets!!!
}

function removeFromPlaylist (theirPlaylist, artistName) {
  delete theirPlaylist[artistName];
  return theirPlaylist;
}
/* A note on terminology regarding the following line of code:
var meals = { breakfast: "toast and eggs" };
meals is the object
breakfast is the key
"toast and eggs" is the value
{breakfast: "toast and eggs"} is the property (though some would say that breakfast is the property)
Some would say that the statement " meals.breakfast = 'oatmeal'; " is a property
These websites help: https://stackoverflow.com/questions/28648090/properties-vs-keys-vs-values-in-javascript
https://www.codecademy.com/en/forum_questions/5606d283e39efe9181000557
https://developer.mozilla.org/en-US/docs/Glossary/property/JavaScript */