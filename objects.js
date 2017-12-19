var playlist = { Rahman : "En melvizhundha",
                 Raja : "en iniya",
                 Anirudh : "yennai maatrum"
}

function updatePlaylist(obj,key,value){
  obj[key] = value
  return obj
}
updatePlaylist(playlist,shaan,muthuchippi)
function removeFromPlaylist(obj,key){
  delete obj[key]
  return obj
}
removeFromPlaylist(playlist,Raja)