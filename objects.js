var playlist = {
  Hozier: 'Work Song'
}

function updatePlaylist (object, artist, songTitle) {
    object[artist] = songTitle;
    return object;
  }

function removeFromPlaylist(object, artist) {
  delete object[artist];
  return object;
}
