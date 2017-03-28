var playlist = { artist: "title"};

function updatePlaylist(object, artist, title) {
  object[artist] = title;
  return object;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}