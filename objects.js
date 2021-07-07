var playlist = { john_lennon: 'imagine' };

function updatePlaylist(playlist, name, title) {
  return Object.assign({}, playlist, {[name]: title});
}

function removeFromPlaylist(playlist, name) {
  var res = Object.assign({}, playlist);
  delete res[name];
  return res;
}