var playlist = {
  artistName: 'Addele',
  artistTitle: 'hello'
}
playlist

updatePlaylist(playlist,artistName, songTitle){
   return Object.assign({playlist},artistName,songTitle)
}
playlist

function removeFromPlaylist(playlist, artistName){
  delete playlist[0]
  return playlist
}
 playlist
