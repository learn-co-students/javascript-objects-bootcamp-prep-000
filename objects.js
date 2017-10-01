var playlist = {name: "Hello"}

function updatePlaylist(playlist,aname,asong) {
  playlist[aname] = asong
  return playlist
}

function removeFromPlaylist(playlist , artistName) {
  delete playlist[artistName]
  return playlist
}
