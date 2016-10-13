var playlist = {
  'Led Zeppelin': "Stairway to Heaven"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { 'Phil Ochs': songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
