
var playlist  = {NIN:'Reptile', Cher:'Amore'};

function updatePlaylist(obj, key, value) {
  obj[key] = value
 
  return obj
}


function removeFromPlaylist(obj, key) {
  delete obj[key];
 
}