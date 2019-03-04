var playlist = { artistName: 'song title' } 

function updatePlaylist(playlist, artistName, songTitle) {
 Object.assign({artistName: songTitle});
 return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}