var playlist = {
  artist: song
}

function updatePlaylist(playlist, 'artist', 'song') {
      playlist.newartist = 'song'
      return playlist
}

function removeFromPlaylist(playlist, 'artist', 'song'){
  delete playlist.artist
  return playlist
}
