var playlist = {'Ice Cube': 'Today was a Good Day'}

function updatePlaylist (obj, artist, title) {
  playlist.Assign ({}, obj, {artist: title})
  return playlist;
}

function removeFromPlaylist (obj, artist) {
  delete obj[artist]
}
