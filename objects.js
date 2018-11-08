var playlist = {'Hey Jude': 'Beatles', 'I Don\'t want to miss a thing': 'Aerosmit'}

function updatePlaylist(list, artistName, songTitle)  {
  list[artistName] = songTitle
  return list
}

function removeFromPlaylist(list, artistName) {
  delete list[artistName]
  return list
}
