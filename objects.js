var playlist = {
  artist : "Song Title"
};

function updatePlaylist(playlist, artist, songTitle){
  playlist[artist] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
};
