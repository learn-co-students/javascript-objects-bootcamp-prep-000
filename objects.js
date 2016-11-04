var playlist = {drake: 'motto',
                adele: 'hello',
                beyonce: 'ring'
                }

function updatePlaylist(list, artistName, songTitle){
  list[artistName] = songTitle
  return list
}

function removeFromPlaylist(list, artistName) {
  delete list[artistName]
  return list
}
