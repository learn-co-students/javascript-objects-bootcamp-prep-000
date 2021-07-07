var playlist = {artist: "title"}

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(obj, key) {
  delete playlist.artist;
  return playlist;
}
