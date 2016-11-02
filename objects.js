var playlist = {
  'David Bowie': 'Changes',
  Beyonce: 'Six Inch'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
