
playlist = {
  Beyonce: 'put a ring on it',
  Swift: 'look what you made me do'
}

function updatePlaylist(playlist,artistName,title){
  return Object.assign({}, playlist, {[artistName]: title})
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
