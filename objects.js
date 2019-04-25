function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
const recipe = { eggs: 3 }
 
console.log(destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups'))
// returns { eggs: 3, flour: '3 cups' }
 
// but also, recipe is permanently alterted
 
console.log(recipe) // { eggs: 3, flour: '3 cups' }



var playlist = {  // a playlist with artist and song key-value pairs
  biggie : '50centMcdonalds'
};

function updatePlaylist(object, artist, song) {
  
  // var new_playlist = Object.assign({}, object, {artist : song})
  // Object.assign({}, playlist, { shins: 'hippie jam'})
  return object[artist] = song;
}

function removeFromPlaylist(object, artist) {
  return delete object[artist]
}