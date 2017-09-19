/*var meals = {};

var meals = new Object();

var meals = { breakfast: "oatmeal" };
var meals = new Object({ breakfast: "oatmeal" })
*/

var playlist = new Object({ artistName: 'songTitle' })

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
