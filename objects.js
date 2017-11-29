var playlist = {'RHCP' : 'Snow'};

function updatePlaylist(object, artist, song) {
  Object.assign(object, {[artist] : song})
  return object
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist
}
