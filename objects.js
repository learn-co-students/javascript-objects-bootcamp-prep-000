var playlist = {
  Coldplay: 'Clocks',
  'Spice Girls': 'Spice Up Your Life'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
