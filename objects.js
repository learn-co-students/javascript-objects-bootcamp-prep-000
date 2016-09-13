var playlist = {
  Usher: "Yeah"
};
function updatePlaylist(obj, name, title){
  obj[name] = title;
  return obj;
}

function removeFromPlaylist(playlist, artistName){
  var copyPlaylist = Object.assign({}, playlist);
  delete copyPlaylist[artistName];
  return copyPlaylist;
}
