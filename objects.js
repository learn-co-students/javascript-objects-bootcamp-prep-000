var playlist = {
  'Fall Out Boy': 'Champion',
  'Imagine Dragons': 'Round and Round'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi";
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist["Kanye"];
  
  return playlist;
}