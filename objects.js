var playlist =  {artist: "artest", song: "title"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
}