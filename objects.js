let playlist ={
  Chronixx: 'I Can',
  Kanye: 'Reborn'
};

function updatePlaylist(playlist,artist,song){
  
  playlist.artist= song;
  
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  
  delete playlist.artist;
  
  return playlist;
}