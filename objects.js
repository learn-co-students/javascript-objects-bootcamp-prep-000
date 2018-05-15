var playlist = {'Social D':'story of my life'}

function updatePlaylist(list,name,song) {
  playlist[name] = song
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}