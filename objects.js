var playlist = new Object({artistName: 'songTitle'});

var updatePlaylist = (playlist, artistName, songTitle) => {
  delete playlist.artistName;
  playlist[artistName] = songTitle;
  return playlist;
}

var removeFromPlaylist = (playlist, artistName) =>{
  delete playlist[artistName];
  return playlist;
}
