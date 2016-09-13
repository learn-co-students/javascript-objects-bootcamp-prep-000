var playlist = {
  lilWayne: 'Lollipop',
  justinBieber: 'Baby'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  var playlist2 = Object.assign(playlist)
  delete playlist2[artistName]
  return playlist2
}
