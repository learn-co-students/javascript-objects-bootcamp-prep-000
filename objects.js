var playlist = {"artist1": "song1"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}

console.log(updatePlaylist(playlist, "artist2", "song2"));
console.log(removeFromPlaylist(playlist, "artist1"));
