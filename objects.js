//1
var playlist = {artistName: "songTitle"};
//2
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
//3
function removeFromPlaylist(playlist, artistName) {
 delete playlist[artistName]
 return playlist
}
