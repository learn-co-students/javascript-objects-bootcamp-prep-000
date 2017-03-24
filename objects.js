var playlist = {'Pink Floyd' : 'Wish You Were Here'};

function updatePlaylist(playlist, artistName, songTitle) {
  // 'destructive' method
    //  playlist[artistName] = songTitle;

  //  'non-destructive' method returns new string.
    // preserves original playlist Obj.
  return Object.assign({}, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
