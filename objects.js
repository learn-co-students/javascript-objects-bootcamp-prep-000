var playlist = new Object({ keys: `0` })

function updatePlaylist(playlist,artistName,songTitle) { //adds the song and artists as a pair to the playlist
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlist,artistname) {
  delete playlist[artistname] //make sure to use []
  return playlist
}
