var playlist = {playlist:'object'}
//define playlist
function updatePlaylist (playlist, artistName, songTitle){
    return Object.assign({}, playlist, { [artistName]: songTitle })
}
//update playlist to include artist and song title
function removeFromPlaylist(playlist, artistName){

  delete playlist[artistName]
  return playlist
}
//remove an artist from the playlist
