var playlist = {
  Madonna: 'Like a Virgin',
  KidCudi: 'Day and Night'
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
}