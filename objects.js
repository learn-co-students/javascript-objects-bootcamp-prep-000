var playlist = {JasmineRodgers: 'Two Years'}

function updatePlaylist(list, artist, songTitle){
  list[`${artist}`] = songTitle
  return list
}

function removeFromPlaylist(list, artist){
  delete list[`${artist}`]
  return list
}
