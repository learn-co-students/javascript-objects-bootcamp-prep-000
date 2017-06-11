//  Assign an object to the variable playlist and initialize the object with
//  a key-value pair - the keys will be the artist names and the values will
//  be song titles
var playlist = { artist: "song name" }
//  Create a function updatePlaylist that accepts three parameters: the
//  playlist (an object), an artist name (a string), and a song title.
//  The body of the function should add the song and artist as a key-value
//  pair to the playlist object. The function should return the whole playlist
function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value})
}
//  Create a function removeFromPlaylist that accepts two arguments (the
//  playlist object and the artist name). The body of the function should
//  delete the key-value pair from the playlist and return the updated playlist
function removeFromPlaylist(playlist, artistName) {
//  delete playlist.artistName
//  the above function in the comment does not work because it looks for
//  the name artistName and not the variable!
  delete playlist[artistName];
  return playlist
}
