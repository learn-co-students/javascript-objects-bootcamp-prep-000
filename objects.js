var playlist = {
  Leonard_Cohen: 'Suzanne',
  Bright_Eyes: 'Classic Cars'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;

}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;

}
