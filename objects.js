var playlist = {Beatles: "Walrus"}

function updatePlaylist(play, artist, song) {
  play[artist] = song
  return play
}

function removeFromPlaylist(play, artist) {
  delete play[artist]
  return play
}