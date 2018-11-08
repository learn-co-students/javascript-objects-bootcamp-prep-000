var playlist = {'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes'}

function updatePlaylist(list, artistName, songTitle) {
  list[artistName] = songTitle
  return list
}

function removeFromPlaylist(list, artistName) {
  delete list[artistName]
  return list
}
