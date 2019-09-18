var playlist = {"Phil Ochs": "Here's to the State of Mississippi", Kanye: "Gold Digger"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}