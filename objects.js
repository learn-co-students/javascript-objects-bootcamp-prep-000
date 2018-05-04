var playlist = {Eminem: 'River'}

function updatePlaylist(obj, key, value) {
  playlist[key] = value;
  return playlist;
}

function removeFromPlaylist (obj, key) {
  delete playlist[key];
  return playlist;
}
