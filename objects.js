var playlist = { Myd: "The Sun" };

function updatePlaylist(playlist, artist, song) {
  return Object.assign( playlist, { [artist]: song }); //modifies existing playlist object
}
function removeFromPlaylist(playlist, artist) {
  return delete playlist.Slowdive;
  //console.log(playlist);
}