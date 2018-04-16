// Playlist Object
var playlist = { Lawrence: 'Do You Wanna Do Nothing With Me?'};

// Adding to the playlist [ Destructive ]
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

// Removing from the playlist [ Destructive ]
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}