var playlist = {
  "Slowdive": 'Alison',
  "My Bloody Valentine": 'Sometimes'
};


function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}

//updatePlaylist(playlist, "Phil Ochs", 'Heres to the State of Mississippi');


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}

//removeFromPlaylist(playlist.Slowdive);

