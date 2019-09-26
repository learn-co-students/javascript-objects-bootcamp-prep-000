var playlist = {sublime: 'santeria', outkast: 'roses'}

function updatePlaylist (pl,artist,song) {
  pl[artist]=song
  return pl
}

function removeFromPlaylist(playlist1,artist) {
  delete playlist1[artist]
  return playlist1
}