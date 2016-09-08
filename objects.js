var playlist = {};
Object.assign(playlist, { Nirvana: 'SmellsLikeTeenSpirit' })

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle // unclear why playlist.artistName = songTitle doesn't work
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
