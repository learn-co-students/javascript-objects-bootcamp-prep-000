var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
}

var artistName
var songTitle

function updatePlaylist(playlist, artistName, songTitle) {
  artistName = 'Phil Ochs'
  songTitle = 'Here is to the State of Mississippi'
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
  return playlist
}
