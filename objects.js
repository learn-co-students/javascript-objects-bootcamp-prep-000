var playlist = {artistName, songTitle};
var artistName;
var songTitle;

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return Object;
}

function removeFromPlaylist(playlist, artistName){
 delete playlist[artistName];
 playlist;
}