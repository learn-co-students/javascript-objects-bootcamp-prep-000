var playlist = {Rush: "Fly By Night"}

//console.log(playlist)

function updatePlaylist(obj, artist, title){
  obj[artist] = title
  
  return obj
}

updatePlaylist(playlist,'Led Zeppelin',"Ramble On")


//console.log(playlist)

function removeFromPlaylist(obj, artist){
  delete obj[artist]
  return obj
}

