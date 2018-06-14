var playlist={queen:'sing to me'}

function updatePlaylist(playlist, artistName, songTitle) {
  var newObject = {[artistName]:[songTitle]}
  console.log(newObject)
  return Object.assign(playlist,newObject)
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return 
}