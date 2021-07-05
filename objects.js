var playlist =new Object()

function updatePlaylist(playlist,artistname,songtitle){
   playlist[artistname] = songtitle;
   return playlist;
}