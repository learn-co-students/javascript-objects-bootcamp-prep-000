var playlist = new Object({ enigma: "Return to Innocence", sod: "Toxicity" })

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
