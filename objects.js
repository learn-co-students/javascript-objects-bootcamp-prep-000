var playlist = new Object({sts9: 'when the dust settles'});

function updatePlaylist(myObject,artist,title) {
  return Object.assign({},myObject, {[artist]: title});
}

function removeFromPlaylist(myObject, artist) {

  delete myObject[artist];
  return myObject;
}
