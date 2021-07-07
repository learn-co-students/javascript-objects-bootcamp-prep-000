var playlist = {
  'Slowdive':'Alison',
  'My Bloody Valentine': 'Sometimes',
};

 function updatePlaylist (obj, artistName, songTitle) {
  playlist [artistName]= songTitle
  return playlist
}

updatePlaylist (playlist, 'Phil Ochs', "Here's to the State Of Mississippi");

 function removeFromPlaylist (obj, artistName) {
  delete playlist.Slowdive;
  return playlist;
}

removeFromPlaylist(playlist,'Slowdive');