var playlist = {};
var playlist = { 'artistName': 'songTitle' };

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign(playlist, { 'Phil Ochs': "Here's to the State of Mississipi"})
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist['Slowdive'];
}
