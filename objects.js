var playlist = {
  Kaskade: "Cold As Stone"
  
};

function updatePlaylist(playlist,artistName,songTitle) {
//playlist.artistName = songTitle 
 
//return Object.assign({}, playlist, {artistName:[songTitle]})
 
 
 playlist[artistName] = songTitle
 
}

function  removeFromPlaylist(playlist, artistName){

delete playlist[artistName] 
return playlist
}