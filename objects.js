var playlist = {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3"
}

function updatePlaylist(list, artist, song){
  list[artist] = song
  return list
}

function removeFromPlaylist(list, artist){
  delete list[artist]
  return list
}
