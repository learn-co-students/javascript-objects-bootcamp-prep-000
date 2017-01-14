var playlist = {
  Adele: "Hello",
  '3 Doors Down': "I'm here without you",
  Kanye: "Gold Digger"
}

function updatePlaylist(obj, artist, song){
  return Object.assign({}, obj, { [artist]: song});
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}