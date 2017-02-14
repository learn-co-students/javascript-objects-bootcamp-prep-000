var playlist = {
  Lessons: 'Are Not Always Intuitive'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist
}
