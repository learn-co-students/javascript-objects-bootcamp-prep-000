const playlist = {
  "Darren Korb": [
    "Bound Together"
  ]
}

function updatePlaylist(playlist, artist, song) {
  artist in playlist ? playlist[artist].push(song) : playlist[artist] = [song];
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}