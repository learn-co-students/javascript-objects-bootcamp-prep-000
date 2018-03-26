var playlist = {shakira:"twerk_twerk"}

function updatePlaylist(obj, name, title){
  obj[name] = title
  return obj
}

function removeFromPlaylist(obj, name){
  delete obj[name]
  return obj
}