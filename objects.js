var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

updatePlaylist(playlist, 'Alison', 'Slowdive')
updatePlaylist(playlist, 'Sometimes', 'My Bloody Valentine')
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
playlist

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

removeFromPlaylist(playlist, 'Alison')

