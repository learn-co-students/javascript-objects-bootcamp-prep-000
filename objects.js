var playlist = {queen: "We will rock you"}

function updatePlaylist(obj, artist, title){
  obj[artist] = title
  return obj
}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
  return obj
}
