// Create a function updatePlaylist that accepts three parameters:
// the playlist (an object), an artist name (a string), and a song title.
// The body of the function should add the song and artist as a key-value pair to the playlist object.
//  The function should return the whole playlist.


var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
