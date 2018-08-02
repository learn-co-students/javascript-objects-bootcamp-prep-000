var playlist = { 
  "ACDC": "Thunderstruck", 
  "Jay Rock": "Win",
  "JT": "Sexy Back"
};


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}