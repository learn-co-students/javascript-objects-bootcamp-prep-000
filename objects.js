var playlist = Object.assign({artistName:'songTitles'})

function updatePlaylist(playlist,artistName,songTitle){
  return playlist={[artistName]:songTitle}
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
