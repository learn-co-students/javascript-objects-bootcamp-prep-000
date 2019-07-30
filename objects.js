var playlist = {"Norah Jones": "Don't Know Why"}

function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName]= songTitle
return playlist }

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
