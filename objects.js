var playlist = {"My Bloody Valentine": "song1",
  "Slowdive": "song2",
  "Phil Ochs": "song3"};
  
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
}
updatePlaylist(playlist, "artist4", "song4");  

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

removeFromPlaylist(playlist, "artist2");