var playlist = { camilaCabello: 'Havana',
  taylorSwift: 'Ready for it?'};

function updatePlaylist(playlist, artistName, SongTitle) {
  return Object.assign({}, playlist,{ [artistName]: SongTitle} )
}

function removeFromPlaylist(playlist, artistName) {
  return Object.assign({},delete playlist.artistName)
}
