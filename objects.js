var playlist = {
  'Phil Ochs': "Here's to the State of Mississippi"
};

function updatePlaylist (playlist, artistName, songTitle){
  playlist.Alison = 'Slowdive',
  playlist.Sometimes = 'My Bloody Valentine'
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  
  return playlist;
}
