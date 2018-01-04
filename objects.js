var playlist = {artist :'name', song: 'title'}
function updatePlaylist(obj, key, value) {
 obj[key] = value 
 return obj
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}