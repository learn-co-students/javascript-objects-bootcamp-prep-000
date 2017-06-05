playlist = { 
  "The Shins" : "Let It Go",
  Radiohead : "Creep"
}

function updatePlaylist(list, artistName, songTitle) {
  list[artistName] = songTitle
  console.log(list)
  return list
}

function removeFromPlaylist(list, artistName) {
  delete list[artistName]
  return list
}


