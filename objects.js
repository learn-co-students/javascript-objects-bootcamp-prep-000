
var playlist = {
   Adele: "hello",
   Kanye: "homecoming"
}
  function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
    return playlist
  }

  function removeFromPlaylist(playlist,artistName) {
    delete playlist[artistName]
    return playlist
}
