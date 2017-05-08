var playlist = { 
    nirvana: "smells like teen spirit",
    weezer: "island in the sun"
}

// limitation imposed is that can only have one song from one artist

function updatePlaylist (playlist, artistName, songTitle) {
  
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}