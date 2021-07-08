var playlist = {
  'Kanye West': 'Homecoming', 
  'Frederik Chopin': 'Overture No.5',
  'Katy Perry': 'Lights'
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
