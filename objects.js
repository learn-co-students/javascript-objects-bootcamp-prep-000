var playlist = {
  Drake: 'Since Way Back',
  Future: 'Solo'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to Mississippi")

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}


// HAAAAAAPPPPPYYY FAAAACCCEEEEE :DDDDDDDD
