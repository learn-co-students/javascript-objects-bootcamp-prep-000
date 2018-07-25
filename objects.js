var playlist = new Object ({ nirvana: "smells like teen spirit" })

function updatePlaylist(playlist, artistName, songTitle){
   playlist[artistName] = songTitle
   return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

