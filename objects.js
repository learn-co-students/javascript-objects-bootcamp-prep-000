var playlist = {
  utada: "Hotel Lobby",
}

function updatePlaylist(obj, artName, song) {
  obj[artName] = song;
  return obj 
}

function removeFromPlaylist(obj, artName) {
  delete obj[artName];
  return obj
}