var artistName;
var songTitle;
var playlist = {artistName, songTitle}

//non destructive
function updatePlaylist(playlist, artistName, songTitle) {
//function updatePlaylist(artistName, songTitle) {// shorter version
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

//destructive
//function updatePlaylist(playlist, artistName, songTitle) { OR
/*function updatePlaylist(artistName, songTitle) {
  return playlist[artistName] = songTitle;
}*/

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  return playlist
}
