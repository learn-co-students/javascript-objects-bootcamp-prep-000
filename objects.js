// Variable Declaration
var playlist = {[artistName]: [songTitle]};
var artistName;
var songTitle;

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
