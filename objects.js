var playlist = new Object({Kanye: 'Gold Digger'});

function updatePlaylist(obj, artistName, songTitle){
  obj[artistName] = songTitle;
  return obj
}

function removeFromPlaylist(ob, artistName){
  delete ob[artistName];
  return ob;
}
