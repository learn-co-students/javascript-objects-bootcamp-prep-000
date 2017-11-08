var playlist = {beatles: 'Hey Jude'};

function updatePlaylist(my_playlist, artist, song) {
  my_playlist[artist] = song;
  return my_playlist
};

function removeFromPlaylist(my_playlist, artist) {
  delete my_playlist[artist]
  return my_playlist
};
