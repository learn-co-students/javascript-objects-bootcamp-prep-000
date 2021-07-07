var playlist = {
  EdSheeran:  'Castle on the hill'
}

function updatePlaylist(playlist, artistName, songTitle){
  //playlist[ShawnMendes] = 'In My Blood';
  playlist[artistName] = songTitle;
  return playlist
}

updatePlaylist(playlist, ShawnMendes, 'In My Blood' );

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}

//removeFromPlaylist(ShawnMendes, 'In My Blood')
