var playlist = {
  artist: 'Joey',
  song: 'Lost in the Echo'
}

function updatePlaylist(playlist, artistName, songTitle)
 { 
playlist[artistName] = songTitle
return playlist
 }

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
