var playlist = new Object({artist:"song"})

function updatePlaylist (playlist, artistname, song){
  return Object.assign(playlist, { [artistname]: song })
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye
  return playlist
}
