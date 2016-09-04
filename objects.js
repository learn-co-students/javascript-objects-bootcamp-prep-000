var playlist = {
  madonna: 'frozen',
  sting: 'fieds of gold',
  pink: 'family portret'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
