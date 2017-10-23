var playlist = {}
playlist.dido = "Life for Rent"

function updatePlaylist(playlistt, artist, song){
  return Object.assign({}, playlistt, { [artist]: song })
}
function removeFromPlaylist(playlistt, artist){
  delete playlistt[artist]
  return playlistt
}
