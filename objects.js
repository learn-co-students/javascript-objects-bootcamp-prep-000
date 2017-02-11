var playlist = new Object({a : 'b'})

function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
var n = artistName
delete playlist[n]

return playlist

}
