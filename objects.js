var playlist = { artist: "song"};

function updatePlaylist(object,key,song) {
  object[key] = song
  return object
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}
