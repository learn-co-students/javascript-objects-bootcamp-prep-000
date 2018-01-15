var playlist = new Object ({ Pavarotti: 'The Thrill Is Gone'})

function updatePlaylist(pl, artistName, songTitle) {
  pl[artistName] = songTitle
  return pl
}

function removeFromPlaylist(pl, artistName) {
  delete pl[artistName]
  return pl
}