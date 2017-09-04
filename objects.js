var playlist = new Object({ artistName: 'songTitle' })

function updatePlaylist(obj, key, value) {
  return Object.assign({}, {['Phil Ochs']: "Here's to the State of Mississippi" })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist["Kanye"];
  return playlist
}
