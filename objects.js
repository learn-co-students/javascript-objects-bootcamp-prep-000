var playlist = {adele:'hello'}
console.log(playlist)
function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist (playlist, artistName) {
  console.log(artistName)
 
  delete playlist.Slowdive;
  console.log(playlist)
  return playlist
}