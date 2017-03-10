// Assign an object to the variable playlist. The keys will be 
// artist names and the values will be song titles.
var playlist = {
  artist: 'song',
}

// Created a function that accepts 3 paramters:
// playlist(an object), aristName(a string),
// a song title. The body of the function adds
// the song and artist as a key-value pair to the
// playlist object. The function returns the whole playlist.
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

// The function removeFromPlaylist accepts two arguments:
// the playlist(an object) and the artistName. The body of
// the function deletes the key-value pair from the playlist
// and returns the updated playlist.
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
