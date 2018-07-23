var playlist = {elvis : "Jailhouse rock"};

function updatePlaylist(obj, artist, title){
  obj[artist] = title;
  return obj;
}

function removeFromPlaylist(obj, artist){
  delete obj.artist;
  return obj;
}

updatePlaylist(playlist, "taylor", "Shake it up");
removeFromPlaylist(playlist, elvis);

console.log(playlist);