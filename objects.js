// Defines an object called `playlist`
//var playlist = {Beatles: 'Yellow Submarine' };
var playlist = new Object({Beatles: 'Yellow Submarine' });

// updatePlaylist(playlist, artistName, songTitle)
// Adds the `artistName: songTitle` key-value pair to `playlist`
// Expect: { 'Phil Ochs': "Here's to the State of Mississippi" }
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

// removeFromPlaylist(playlist, artistName)
// Removes `artistName` from `playlist`
// Expect: {}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
