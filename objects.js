var playlist = new Object({artistName, songTitle})

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { ['Phil Ochs']: "Here's to the state of Mississippi" })
  return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete Object.artistName({}, playlist, { ['Kanye']: "Gold Digger" })
  return playlist
}
