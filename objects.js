var playlist ={ 'Limp Bizkit': "Rollin", 'Muse': "Uprising", 'Offspiring': "Feelings", 'Bon Jovi': "My Life" }

function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName]
return playlist
}