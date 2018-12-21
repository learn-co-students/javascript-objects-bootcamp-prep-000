/**
 * An Object to hold playlist key value pair of an artist and their songs
 */

var playlist = {
  'Craig David': 'Raise and fall.',
  
};

// function to update the playlist and return it.
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

// function to remove a key-value pair from the playlist and 
// then return it.
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}