var playlist = {};
playlist['Taylor Swift'] = 'Shake it off' ;


function updatePlaylist(playlist,  artistName, songTitle) {
  playlist[artistName] = songTitle;
}

/* alternatively use 
 return Object.assign({}, playlist, { [artistName]: songTitle }); to update non destructively */
 
 function removeFromPlaylist(playlist,artistName) {
   delete playlist[artistName];
   return playlist;
 }