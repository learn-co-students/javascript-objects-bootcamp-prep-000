var meals = { breakfast: "oatmeal" };
var meals = new Object({
  breakfast: 'oatmeal'
});
var playlist = { kendrick: "high power", travis: "goosebumps" };
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}