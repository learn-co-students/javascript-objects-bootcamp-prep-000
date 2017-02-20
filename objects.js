playlist = new Object({"katy perry" : "chained to the rhythym"});
console.log(typeof playlist)

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
