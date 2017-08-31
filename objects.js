var playlist = { artistName: 'song title' };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist
}
function removeFromPlaylist(playlist, name) {
  delete playlist.Kanye
  return playlist
}
