
var playlist = {
  Blue Scholars: "The Ave",
  ACDC: "Back in Black"
};


function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, { [artistName]: songTitle });
  return playlist;
}


function removeFromPlayList(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
