var playlist = {
  artistName: 'Meek',
  songTitle: 'dayOne'
};

function updatePlaylist (playlist,artistName,songTitle) {
  playlist[artistName] = songTitle;
  return playlist; 
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}