var playlist = { name: 'song'}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, {[name]: song})
  return playlist
}

function removePlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}