// Assign an object to the variable playlist —
// the keys will be artist names and the values will be song titles. (What
// limitation does this impose on our playlist?)\

//var playlist = {};
var playlist = {artistName: 'songTitle'};
//var createObjectLiteral = { key : 'value'};
//ex: var meals = { breakfast: "oatmeal" };

//Object.assign({}, { foo: 'bar' })
//Object.assign({}, {artistName: 'songTitle'});

// Create a function updatePlaylist that accepts three parameters:
// the playlist (an object), an artist name (a
// string), and a song title.
// The body of the function should add the song and artist
// as a key-value pair to the playlist
// object. The function should return the whole playlist.
//

// function updateObjectWithKeyAndValue(obj, key, value) {
//   return Object.assign({}, obj, { [key]: value })
// }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

// function updatePlaylist(playlist, artistName, songTitle) {
//   return Object.assign({}, playlist, {artistName: 'songTitle'});
// }


// Create a function removeFromPlaylist that accepts
// two arguments (the playlist object and the artist name).
// The body of the function should delete the key-value pair
// from the playlist and return the updated playlist.

// function updateObjectWithObject(targetObject, updatesObject) {
//   return Object.assign({}, targetObject, updatesObject)
// }

function removeFromPlaylist(playlist, artistName) {
  playlist = {artistName: 'songTitle'};
  //delete Object.artistName;
  delete playlist['artistName'];
  return playlist;
  //return Object.assign({}, {playlist: artistName});
}

// var = function updatePlaylist(playlist, 'artistName', 'songTitle') {
//   //return playlist.assign({}, playlist, {[artistName]: 'songTitle'});
//   return Object.assign({}, playlist, {[artistName]: 'songTitle'});
// }



// playlist.artistName: 'songTitle';

// function functionName() {
//
// }
//
// function updatePlaylist(playlist, artistName, songTitle) {
//   playlist.artistName: 'songTitle';
// }
