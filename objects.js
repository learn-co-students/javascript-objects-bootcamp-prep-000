const playlist = {kanyeWest: "Ghost Town", lilUziVert: "XO", danielCaesar: "Get You"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}