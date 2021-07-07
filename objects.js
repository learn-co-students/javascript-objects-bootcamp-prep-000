var playlist = {Queen:"Bohemian Rhapsody"}

function updatePlaylist(list, artist, title){
  list[artist] = title
  return list
}

function removeFromPlaylist(list,artist){
  delete list[artist]
  return list
}