var playlist = {artist1: "song1", artist2: "song2"};

function updatePlaylist(playlist, name, song) {
  playlist[name] = song;

return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]; 

return playlist
}
