playlist = {
  tlc: "No scrubs",
  Kanye: "Gold Digger"
}

var updatePlaylist = function(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
// updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

function removeFromPlaylist(playlist, Kanye) {
  delete playlist["Kanye"]
  return playlist
}
