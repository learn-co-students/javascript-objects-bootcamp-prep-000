//describe 'object'
var playlist = {artistName: "songTitle"};

//describe('updatePlaylist(playlist, artistName, songTitle')
function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = "songTitle"
return playlist

}

//removeFromPlaylist
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

