var playlist = {'Kanye west': "Devil in a new dress"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]: [songTitle]})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist
}