var playlist = {Bobmale: 'Home I come', Lucky: 'Am working away', Kanye: 'Gold Digger'}
function updatePlaylist(playlist, artistName, songTitle) {
playlist['Phil Ochs'] = "Here's to the State of Mississippi"
return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye
  return playlist
}
