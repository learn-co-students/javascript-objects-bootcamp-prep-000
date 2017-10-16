var playlist = {["Michael Jackson"]: "Thriller"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}

removeFromPlaylist(playlist,"Michael Jackson")
updatePlaylist(playlist,"Kanye","Gold")
console.log(playlist)
