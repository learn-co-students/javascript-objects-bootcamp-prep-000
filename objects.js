let playlist = {
  LilWayne : 'A Milli',
  BiggieSmalls : 'Juicy',
  KendrickLamar : 'Humble'
};

function updatePlaylist(obj, artistName, songTitle){
  obj[artistName] = songTitle;
  return obj;
}

function removeFromPlaylist(obj, artistName){
  delete obj[artistName];
  return obj;
}
