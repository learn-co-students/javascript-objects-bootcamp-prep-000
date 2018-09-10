var playlist = {
  Slash: "Some slash song",
  
}

function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  
  return playlist;
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
  return obj;
}