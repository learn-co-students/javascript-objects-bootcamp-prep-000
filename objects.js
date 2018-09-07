var playlist ={ 
  artist: ""
};

function updatePlaylist (obj, key, value) { 
obj [key] = value  
console.log (obj)
return obj
}

function removeFromPlaylist (object, artistname) {
  var newplaylist = object 
  return   delete newplaylist[artistname];

}