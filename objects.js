var playlist = {
  bSpears: 'Toxic'
};

function updatePlaylist(obj, name, title){
  obj[name] = title 
  return obj
}

function removeFromPlaylist(obj,name){
  delete obj[name]
  return obj
}