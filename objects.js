playlist = { WuTang: "Mystery of Chessboxin'"};


function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle;
  return playlist;
}


function removeFromPlaylist(playlist, artistName) {

  playlist[artistName] = '';
  return playlist;
}
