var playlist = {"Phil Ochs": "Here's to the State of Mississippi"};

function updatePlaylist(playlist, artist, title) {
  var obj = {};
  obj[artist] = title;
  return Object.assign({}, playlist, obj);
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
