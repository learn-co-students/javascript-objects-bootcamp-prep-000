playlist = new Object();
playlist['Michael'] = 'Hello';

var updatePlaylist = (playlist, artistname, songTitle) => {
  playlist[artistname] = songTitle;
  return playlist;
}

var removeFromPlaylist = (playlist, artistname) => {
  delete playlist[artistname];
  return playlist;
}
