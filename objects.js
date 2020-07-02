var playlist = { artistName: 'song titles' };

function updatePlaylist(obj,key,value) {
  playlist[key] = value;
  return playlist;
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}