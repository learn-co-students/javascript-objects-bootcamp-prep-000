var playlist = { artist: 'SongTitle'};
// aside from it being a global assignment, we can only access the value of this notatation with brackets

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName]; 
  return playlist;
}
//this last one was requesting to delete the key-value pair and return the updated list, which means that it is asking for a desruptive change.