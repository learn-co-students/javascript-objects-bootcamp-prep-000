var playlist = new Object({ "Taylor Swift" : ["You Belong With Me", "Welcome To New York", "Love Story"]})

console.log(playlist)

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
 delete playlist[artistName]
 return playlist
}