var playlist = { 'Tegan and Sara': 'The Con'};

function updatePlaylist(obj, artist, songtitle) {
  obj[artist] = songtitle;
  return obj;
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
  return obj;
}