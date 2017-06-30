var playlist = new Object({artist: 'song'
})

function updatePlaylist(object, artist, song){
  object[artist] = song
  return object
}

function removeFromPlaylist(object, artist){
delete playlist.artist
return playlist
}
