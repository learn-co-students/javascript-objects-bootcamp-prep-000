var playlist ={post_malone :'psycho'}
function updatePlaylist(playlist,artist,song){
 //playlist[artist]=song
 //return playlist
 return Object.assign(playlist,{[artist]:song}) 
}
function removeFromPlaylist(playlist,artist){
  delete playlist[artist];
  return playlist
}