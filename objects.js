var playlist = {
  Slowdive: "Alison",
  My_Bloody_Valentine: "Sometimes",
  Phil_Ochs: "Here's to the State of Mississippi"
}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}

