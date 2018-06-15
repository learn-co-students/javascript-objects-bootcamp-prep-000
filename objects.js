var Playlist = {Adele: "Hello"};

function updatePlaylist(Playlist, Artist, Song) {
  Playlist[Artist] = Song;
  return Playlist;
}

function removeFromPlaylist(Playlist, Artist) {
  delete Playlist[Artist];
  return Playlist;
}
