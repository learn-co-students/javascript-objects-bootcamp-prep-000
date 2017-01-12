var playlist = { beyonce: 'Sorry', theWeeknd: 'Starboy', nickiMinaj: 'the Night is Still Young'}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;

  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];

  return playlist
}
