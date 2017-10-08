var playlist = {song: "my"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  var obj = Object.assign({},playlist);
  console.log(obj);
  delete obj[artistName];
  return obj;
}

//removeFromPlaylist(playlist,"song");
console.log(removeFromPlaylist(playlist,"song"));
console.log("end");
