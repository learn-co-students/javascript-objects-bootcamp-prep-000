var playlist = new Object({ Sublime : 'Santeria'})

function updatePlaylist(object, artist_name, song_name) {
  object[artist_name] = song_name;
  return object
}

function removeFromPlaylist(object, artist_name) {
  delete object[artist_name];
  return object
}

