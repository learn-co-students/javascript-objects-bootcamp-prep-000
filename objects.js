var playlist = new Object({ Timbaland: 'The Way You Are' })

function updatePlaylist(obj, key, value){
  obj[key] = value
  return obj  
}

function removeFromPlaylist(obj, key){
  delete obj[key]
  return obj
}