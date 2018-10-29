var playlist = {U2: 'The sweetest thing'}

function updatePlaylist (obj, artist,song) {
  return Object.assign (obj,{ [artist]: song})
}
function removeFromPlaylist (playlist, artistName) {
delete playlist [artistName]
return playlist
}