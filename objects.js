//var playlist = { artist:'song' }
var playlist = Object.assign({ artist: 'playlist' })

function updatePlaylist(obj, art, song){
  obj[art] = song
  return obj
}
function removeFromPlaylist(obj, art){
  delete obj[art]
  return obj
}
