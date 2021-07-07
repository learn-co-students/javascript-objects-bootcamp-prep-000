
var playlist = { artistName: 'songTitle'};

function updatePlaylist(obj, key, value) {
  return playlist[key] = value;
}

function removeFromPlaylist(obj,key) {
  delete playlist[key];
  return playlist
}
