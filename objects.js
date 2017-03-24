var playlist = {'Pink Floyd' : 'Wish You Were Here'};

function updatePlaylist(playlist, artistName, songTitle) {
  // 'destructive' method
    //   return playlist[artistName] = songTitle;

  //  'non-destructive' method returns new string.
    //   preserves original playlist Obj.
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
