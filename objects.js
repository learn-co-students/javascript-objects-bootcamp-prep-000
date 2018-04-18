var playlist = {"Phil Ochs": "Here's to the State of Mississippi"};

function updatePlaylist(playlist, artistName, songTitle) {
  var b = Object.assign({}, playlist, {artistName: songTitle})
  return b
}

function removeFromPlaylist(playlist, artistName) {
  var b = Object.assign({}, playlist)
  delete b.artistName
  return b
}