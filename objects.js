//1 assign object
var playlist = {
  greenday: "Time of your life"
};


//2 update playlists
function updatePlaylist(playlistObj, artistName, songTitle) {
  
  playlistObj[artistName] = songTitle;
  return playlistObj;
  
}


//3 Remove Artist and Song 
function removeFromPlaylist(playlist, artistName) {
  
  delete playlist[artistName];
  return playlist;
  
}
