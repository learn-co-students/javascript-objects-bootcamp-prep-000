var playlist = {"Maroon 5": "Sunday Morning"};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  //console.log(playlist)
  return playlist;
}

//updatePlaylist(playlist, "These Guys", "I'll Be Fine")
//removeFromPlaylist(playlist, "Maroon 5");