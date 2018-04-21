var playlist = { artistName: 'songTitle' }

Object.assign({}, { artistName: songTitle }, { Slowdive: 'Alison'})

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: 'songTitle' })
}

updatePlaylist(playlist, 'My Bloody Valentine', 'Sometimes');

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
