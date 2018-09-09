var playlist = {artistName: "Beatles" , songTitle: "Yesterday"};

function updatePlaylist(playlist, artistName, songTitle) {
  
   return Object.assign (playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist;
  
}