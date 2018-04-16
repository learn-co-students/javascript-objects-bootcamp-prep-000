var playlist = {
  eminem: 'Mockingbird',
  outcast: 'Hey ya'
};


function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle
  
}

function removeFromPlaylist (playlist, artistName) {
 delete playlist [artistName];
  
}