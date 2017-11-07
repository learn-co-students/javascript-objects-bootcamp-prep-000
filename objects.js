

//var playlist = new Object({ madona : 'La Isla bonita', queen : 'Radio Ga Ga' });

var playlist = { madona : 'La Isla bonita', queen : 'Radio Ga Ga' };


function updatePlaylist(obj, key, value){
  return  Object.assign({},obj, {[key] : value});
}

function removeFromPlaylist(obj, key){
   delete obj[key];
   return obj;
}
