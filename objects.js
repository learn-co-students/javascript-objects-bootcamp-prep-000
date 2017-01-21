var playlist = {
  Beyonce: 'singleLadies',
  KanyeWest: 'homecoming',
  JayZ: 'otis'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist

}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist;

}
