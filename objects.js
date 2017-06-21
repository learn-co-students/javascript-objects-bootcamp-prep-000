var playlist = {artistName: songTitle}

function updatePlaylist('playlist', 'artistName', 'songTitle'){
  return playlist.assign({artistName: songTitle})
}
