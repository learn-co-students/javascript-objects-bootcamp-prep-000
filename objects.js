var playlist = {["a"]: "b"}

function updatePlaylist(o, a, t){
  o[a]=t
  return o
}

function removeFromPlaylist(o, a){
  delete o[a]
  return o
}