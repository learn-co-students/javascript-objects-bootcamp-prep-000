var playlist = {
  DJHarvey: 'Flamenco'
};

function updatePlaylist(obj,str,title){
  obj[str]=title
  return obj

}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
  return obj
}
