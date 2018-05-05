var playlist = {"Artist 1": "Song 1", "Artist 2": "Song 2"}

function updatePlaylist(playlist,b,c){
  return playlist[b]=c
}

function removeFromPlaylist(playlist,b){
  delete playlist[b]
  return playlist
}
