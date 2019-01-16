// ## Instructions
//
// 1. Open `objects.js`
//
// 2. Assign an object to the variable `playlist` and initialize the object with a key-value pair — the keys will be artist names and the values will be song titles.
// (What limitation does this impose on our `playlist`?)
//
// 3. Create a function `updatePlaylist` that accepts three parameters: the playlist (an object), an artist name (a string), and a
//song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.
//
// 4. Create a function `removeFromPlaylist` that accepts two arguments (the playlist object and the artist name). The body of the function should delete
//the key-value pair from the playlist and return the updated playlist.

const playlist = {
artistName: 'songTitle'
}

function updatePlaylist(obj, name, song){
  Object.assign(obj, {[name]: song})
  return obj
}

function removeFromPlaylist(obj, name) {
  delete obj[name]
  return obj
}
