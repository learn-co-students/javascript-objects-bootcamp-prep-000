
var playlist = {smiths: 'rusholm ruffians'}


function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist(playlist, Kanye) {
  delete playlist.Kanye
  return playlist
}
