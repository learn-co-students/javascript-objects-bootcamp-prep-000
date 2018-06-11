var playlist = new Object();
var playlist = {'Ed Sheeran': 'Make It Rain'};
function updatePlaylist(obj,name,title) {
  return Object.assign({},obj,{name:title});
}

function removeFromPlaylist (obj,name) {
  delete obj.name;
  return playlist;
}