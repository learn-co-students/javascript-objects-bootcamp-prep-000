var playlist = {MJ:"Billie Jean"}

function updatePlaylist (play,name,songTitle){
play[name] = songTitle
return play
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
 return playlist
}
