var playlist = {
  'Michael Jackson': 'Billie Jean', 
  'George Michael': 'Faith',
  'Cher': 'Believe In Love'
}

function updatePlaylist(playlist, artistName, songTitle){
  // return Object.assign({}, playlist, {artistName: songTitle});
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}