

var playlist = {  
  artist: "songs"
}; 

function updatePlaylist(object,name,song){
  object[name] = song
  return object
}

function removeFromPlaylist(object, name){
  delete object[name]
  return object
}

