// Learn.co Bootcamp Prep 11 JavaScript Objects

// Assign object to playlist variable
var playlist = new Object({Kaleo: "Way Down We Go"});

// Define function to update playlist with a new key-value pair.
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle });
}

// Define function to delete a key-value pair from the playlist and return
// the updated playlist.
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
