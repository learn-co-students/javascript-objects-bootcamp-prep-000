var playlist = {
  artistName: 'bob',
  song:   'redemption song'
}

function updatePlaylist (playlist, artist, song){
  playlist [artistName] = 'jay z'
  playlist [song] = '99 problems'
  return playlist
}

function removeFromPlaylist (playlist, artist){
  delete playlist.artistName;
  return playlist;
}
