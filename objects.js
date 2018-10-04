var playlist = {'artist name': []};

function updatePlaylist(object, string, title) {
  return Object.assign(object, {[string]:title})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

