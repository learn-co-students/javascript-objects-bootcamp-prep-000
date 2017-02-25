// var playlist = {}

var playlist = {
  Drake: "Fake Love"
}

function updatePlaylist({}, artistName, songTitle) {
  var playlist = {}
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  // var playlist = {
  //   Kanye: "Gold Digger"
  // }
  delete playlist[artistName];
  return playlist;
}