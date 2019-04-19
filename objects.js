/*
var playlist = {artist : "The Beatles", song : "Because"};
function updatePlaylist(playlist, artistName, songTitle){
}
*/

var playlist = {"The Beatles" : "Because"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
};

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
};
