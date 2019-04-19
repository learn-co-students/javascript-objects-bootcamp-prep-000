var playlist = {
  eminem: "Wihout Me"
}

function updatePlaylist(playlist, artist, title) {
  return playlist[artist] = title;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
