var playlist = {The Strokes: 'Someday'}

function updatePlaylist(playlist, key, value) {
  return Object.assign(playlist, {[key]: value});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
