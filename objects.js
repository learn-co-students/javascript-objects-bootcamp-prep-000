var playlist = {"Jennifer Lopez" : "Waiting for tonight"}
console.log("Origional ")
console.log(playlist)

function updatePlaylist(playlist, artistName,songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

var newplaylist = updatePlaylist(playlist,"Michel Jackson","Beat it")
console.log("Updated")
console.log(newplaylist)
console.log("Origional")
console.log(playlist)

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  return playlist
}
var a = removeFromPlaylist(playlist,"Jennifer Lopez")
console.log(a)