var playlist = {
  Alison: 'Slowdive',
  'Phil Ochs': 'My Bloody Valentine',
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( {}, playlist,
    {[artistName]: 'songTitle'})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
