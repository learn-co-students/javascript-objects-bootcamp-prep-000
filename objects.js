var playlist = {
  something: 'SongTitle'
};

function updatePlaylist(playlist, artistName, SongTitle){
  playlist[artistName] = SongTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}