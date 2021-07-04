var playlist = {
  Beck: "True Love Will Find You in the End",
  Rihanna: "Love on the Brain",
  Feist: "Hey thats no way to say goodbye"
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];

  return playlist;
}
