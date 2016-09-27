var playlist = {
  'The Beatles': 'Eight Days A Week',
  'The Rolling Stones': 'Paint It Black',
  'Metallica': 'Enter Sandman',
  'Nirvana': 'Come As You Are'
}

function updatePlaylist(object, artistName, songTitle) {
  object[artistName] = songTitle;
  return object;
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
  return obj;
}
