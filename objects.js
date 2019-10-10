var playlist= {artist:'song' };

/*function updatePlaylist(playlist,artistName,songTitle) { return Object.assign(
 {},playlist, {artist:['song']})
} */

function updatePlaylist(playlist,artistName,songTitle){
  
  // return playlist [artist:'song'];
   playlist [artistName]= songTitle;
   return playlist; 

}

function  removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}