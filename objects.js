var playlist={
//artistName; 'songTitle',
billyJoel:'Piano Man',
thePianoGuys: 'Peponi (Paradise)'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
