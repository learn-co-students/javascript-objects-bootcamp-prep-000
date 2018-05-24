var playlist = {
  "Queen": "We will rock you",
  "James Supercave": "Burn",
};

function updatePlaylist(list, artist, song) {
  list[artist] = song;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}