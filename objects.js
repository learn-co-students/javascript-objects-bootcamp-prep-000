var playlist = {
  artisName: "songTitle"
}

function updatePlaylist(playlist,artisName,songTitle) {
  playlist[artisName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist,artisName){
  delete playlist[artisName]
  return playlist
}