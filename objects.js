var playlist = { taylorSwift: "You Need to Calm Down", hippoCampus: "vacation", theAvettBrothers: "Down with the Shine" };
var playlist = new Object({keys: '0'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}