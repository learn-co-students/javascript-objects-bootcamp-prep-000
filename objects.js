var playlist = new Object();

function updatePlaylist(obj, artist, songTitle){
  obj[artist] = songTitle;
  return obj;
};

updatePlaylist(playlist, 'Elliott Smith', 'Independence Day');

function removeFromPlaylist(obj, artist){
  delete obj[artist];
  return obj;
};
