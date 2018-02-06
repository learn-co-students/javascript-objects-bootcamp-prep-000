var playlist ={
  weeknd: "starboy",
  drake: "enemy"
  
}

function updatePlaylist(object, key, value ){
  
    object[key] = value;
    return object;
  
}

function removeFromPlaylist(object, key){
    delete object[key];
    return object;
}