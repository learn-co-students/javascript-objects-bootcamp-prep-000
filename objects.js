var playlist = {'Low Roar':'I\'ll keep coming'}

function updatePlaylist(playlist,artist,title) {
  playlist.artist=title
  return playlist
}
function removeFromPlaylist(playlist,artist) {
  delete playlist.artist
}
