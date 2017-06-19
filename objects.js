var playlist = {
  Kanye: 'Gold Digger'
}

function updatePlaylist(playlist, artist, title) {
  return Object.assign({}, playlist, {[artist] : title});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
