
 var playlist = {
   "Don Williams" : "I believe in you",
   "Glen Campbell" : "Rhinestone Cowboy",
   "Charlie Rich" : "Most Beautiful Girl in the World"
 }

 function updatePlaylist(playlist, artistName, songTitle) {
   return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
