var playlist= {artistName:"Phil Ochs",
  songTitle:"Here's to the State of Mississippi"}

  function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle;
    return playlist
  }

  function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist
  }
