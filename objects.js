var playlist = {artistName: "songTitle"};

var updatePlaylist = function (playlist, artistName, songTitle){
  playlist['Phil Ochs']="Here's to the State of Mississippi";
  return playlist;
}
var removeFromPlaylist = function (playlist, artistName){
delete playlist[artistName];
  return playlist;
}
