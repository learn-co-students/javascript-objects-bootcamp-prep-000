var playlist = {
  artist_name: "Led Zeppelin",
  song_name: "Stairway to Heaven"
};

function updatePlaylist(playlist, artist_name, song_name) {
  playlist[artist_name] = song_name;
  return playlist;
}

function removeFromPlaylist(playlist, song_name){
  delete playlist[song_name];
  return playlist;
}
  