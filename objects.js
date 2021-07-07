var playlist = {
  Drake: 'passionfruit',
  Rihanna: 'Umbrella'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

updatePlaylist(playlist, 'Phil Ochs', 'Slowdive');


function removeFromPlaylist(list, artistName) {
  delete list[artistName];
  return list;
}

removeFromPlaylist(playlist, 'Drake');
