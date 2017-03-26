var playlist = {
  beatles: "come together",
  Eagles: "hotel california"
};

function updatePlaylist(playl, artist, song){
  playl[artist] = song
  return playl
}

function removeFromPlaylist(playl, artist){
  delete playl[artist]
  return playl
}
