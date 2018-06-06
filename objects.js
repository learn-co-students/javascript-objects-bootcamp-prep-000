var playlist = {}
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'

function updatePlaylist(object,artistName,songTitle) {
  object[artistName] = songTitle
  return playlist
}
updatePlaylist(playlist,'Phil Ochs', "Here's to the State of Mississippi")

function removeFromPlaylist(object, artistName) {
  delete object[artistName];
  return playlist
}
removeFromPlaylist(playlist, 'Slowdive')
