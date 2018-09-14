var playlist = {
  "My Bloody Valentine": "song1", 
  "Phil Ochs": "song2", 
  "Slowdive": "song3"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
