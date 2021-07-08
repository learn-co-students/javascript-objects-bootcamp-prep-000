/* Limitation: This playlist uses artist names as keys. Because the key in a
JavaScript object must be a unique string, this playlist cannot contain multiple
songs by the same artist */
var playlist = new Object();
playlist['Shakira'] = 'Hips Don\'t Lie';

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign({}, playlist, { [artist]: songTitle });
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
