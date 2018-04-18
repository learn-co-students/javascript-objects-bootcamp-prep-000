var playlist = {
  'Phil Ochs':"Here's to the State of Mississippi"
};

function updatePlaylist (playlist, artistName, songTitle) {
  
  return Object.assign( playlist, { [artistName]: songTitle })
    return playlist;
}

updatePlaylist (playlist,'My Bloody Valentine',"Sometimes")
updatePlaylist (playlist,'Slowdive',"Alison")


function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}

removeFromPlaylist(playlist,'Slowdive');

/*

function removeFromPlaylist(){
  delete playlist.Slowdive;
  return playlist}
  
  removeFromPlaylist();

*/



