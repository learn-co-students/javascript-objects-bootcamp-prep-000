var playlist = {'Shakira':'Try Everything'}

function updatePlaylist (playlist,artist,song){
  update = {}
  update[artist] = song
  updated_playlist = Object.assign({},playlist,update)
  return updated_playlist
}

function removeFromPlaylist (playlist, artist) {
  delete playlist[artist]
  return playlist
}
