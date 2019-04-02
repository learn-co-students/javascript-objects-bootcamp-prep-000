var playlist = {artist:"song title"}

function updatePlaylist(playlist, artistName, anotherSong){
  playlist[artistName]=anotherSong;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}