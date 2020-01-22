var playlist = {Thrice: 'Cold Cash And Cold Hearts'}

function updatePlaylist(obj, artistName, songTitle) {
  obj[artistName] = songTitle;
  return obj
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName]
}

