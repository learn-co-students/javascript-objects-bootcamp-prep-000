var playlist = {'Slowdive': 'Allison', 'My Bloody Valentine':'Sometimes'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

 console.log(updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi"));

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

 console.log(removeFromPlaylist(playlist, 'Slowdive'));