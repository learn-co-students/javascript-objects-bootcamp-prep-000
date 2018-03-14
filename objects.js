var playlist = { 
  'TLC' : 'No Scrubs',
  'Mandy Moore': 'Only Hope'
};
function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}
