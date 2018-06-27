var playlist = {
  'My Bloody Valentine': 'Song1',
  'Phil Ochs': 'Song2',
  'Slowdive': 'Song3'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Billy Joel'] = 'Song Name1';
  return playlist
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist.Slowdive

  return playlist
}