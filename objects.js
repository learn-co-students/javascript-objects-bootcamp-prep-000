var playlist = {'Radical Face': 'Ghost Towns', 'Sufjan Stevens': 'Death with Dignity'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}