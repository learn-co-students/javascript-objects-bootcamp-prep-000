var playlist = {
  "The Piano Guys": "Over the Rainbow / Simple Gifts"
}

function updatePlaylist(playlistObj, artist, song) {
  return Object.assign({}, playlistObj, { [artist]: song })
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  // playlist[artist] = {};
  return playlist;
}
