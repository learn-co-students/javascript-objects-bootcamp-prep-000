var playlist = {
  Bauhaus : "Kick in the Eye",
  TheCure : "Hot Hot Hot",
  JoyDivision : "Love Will Tear Us Apart"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist [artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist [artistName];
  return playlist; 
}
