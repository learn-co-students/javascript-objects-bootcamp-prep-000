var playlist = new Object();
playlist.Beatles = "Let it be";
//playlist['Beatles'] = "Let it be";
  //Or within the brackets a var containing a string
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
