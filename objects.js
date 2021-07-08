 var playlist = {Sandro: 'La Rosa'};
 function updatePlaylist(playlist, artistName, songName){
   playlist = Object.assign(playlist,{[artistName]: songName})
   return playlist
 }
 function removeFromPlaylist(playlist, artistName){
    delete playlist[[ artistName]]
    return playlist
  }