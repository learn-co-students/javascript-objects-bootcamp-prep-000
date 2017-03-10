//var playlist = new Object({U2 : "Stay"});
var playlist = {U2 : "Stay", Nirvana : "My girl"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
