var playlist = {
  arist: "song"

};
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })


}


function removeFromPlaylist(playlist, artistName){
  var playlist = {artistName}
  delete playlist.artistName;
  return playlist
}
