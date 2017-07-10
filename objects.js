var playlist = {'Ray Charles': 'What I\'d say'}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assing({}, plalist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
