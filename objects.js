var playlist = {artistName: "Phil Ochs", songTitle:"stuff"}

//var artistName = "Phil Ochs"
//var songTitle = "Phil Ochs"

function updatePlaylist(playlist,artistName,songTitle){
  
  return Object.assign({}, playlist,{ [artistName]:songTitle})
}

var playlist = {artistName: "Kanye", songTitle:"stuff"}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  delete playlist.songTitle;
  return playlist;
}