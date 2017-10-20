var playlist = {'justin': 'baby baby' , 'arijit': 'jeene laga hu'}

function updatePlaylist(playlist, artist, song) {

playlist[artist] = song

return playlist
}

function removeFromPlaylist(playlist, artist) {

  delete playlist[artist]

  return playlist
}
