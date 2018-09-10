var playlist = {OneDirection: 'Beautiful', JustinBieber: 'Baby' }


function updatePlaylist (playlist,artistname,song) {
  playlist[artistname]=song
  return playlist
}


function removeFromPlaylist (playlist, artistname) {
  delete playlist[artistname]
  return playlist
}
