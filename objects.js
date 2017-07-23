var playlist = new Object({drake : 'signs'});

function updatePlaylist(playlist, artist_name, song_title){
  playlist[artist_name] = song_title;
  return playlist;
}

function removeFromPlaylist(playlist, artist_name){
  delete playlist[artist_name];
}
