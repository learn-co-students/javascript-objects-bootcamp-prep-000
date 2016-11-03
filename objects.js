var playlist = {'artist': 'song title'}

function updatePlaylist(playlist, artistName, songTitle) {
  //playlist.assign({artistName: songTitle})
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
