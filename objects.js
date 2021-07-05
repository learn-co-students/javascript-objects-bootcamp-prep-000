var playlist = {
  "Raul Seixas" : "Cowboy Fora da Lei",
  "U2": "Zooropa"
};

function updatePlaylist(obj, artist, song){
  obj[artist] = song;
  return obj;
}

function removeFromPlaylist(obj, artist){
  delete obj[artist];
  return obj;
}
