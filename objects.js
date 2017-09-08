var playlist = {};

function updatePlaylist(playlist, artist, title) {
  return playlist[artist] = title;
}

function removeFromPlaylist(playlist, artist) {
  return delete playlist[artist];
}
