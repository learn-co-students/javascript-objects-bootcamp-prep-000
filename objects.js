var playlist = {
  britneySpears: 'Oops I did it again',
  nsync: 'bye bye',
  backstreetboys: 'I want it that way.'
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}