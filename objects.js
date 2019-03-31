var playlist = {'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"} 

// note that if the Keys are artists, then we cannot have multiple songs by the same arist in our object.

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}