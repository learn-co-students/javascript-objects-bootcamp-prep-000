var playlist = { "Fugazi": "Waiting Room" }; 

function updatePlaylist(playlist, artistName, songTitles) {
  return Object.assign(playlist, { [artistName]: songTitles });
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}