var playlist = {journey:'I cant stop'}

function updatePlaylist(dictionary, artistName, song) {
  dictionary[artistName] = song
  return dictionary
}

function removeFromPlaylist(object, artistName) {
  delete object[artistName]
  return object
}


