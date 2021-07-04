var playlist = {artist: "song"};

function updatePlaylist (playlist, name, title) {
  return Object.assign({}, playlist, {[name]: title})
}

function removeFromPlaylist (playlist, name) {
  delete playlist.Kanye;
  return playlist;
}
