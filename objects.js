var playlist = {
  'Taylor Swift': 'Bad Blood',
  'Katy Perry': 'I Kissed A Girl And I Liked It'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
