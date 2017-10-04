var playlist = {'artistnames' : 'songtitles'}
function updatePlaylist(playlist, artistnames, songtitles) {
  return Object.assign({}, playlist, {['Phil Ochs'] :"Here's to the State of Mississippi"})
}
function removeFromPlaylist(playlist, artistname) {
delete playlist[artistname]
  return playlist
}
