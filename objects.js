let playlist = {
  [artistName]: [songTitle]
};

function updatePlaylist(object, name, title){
  object.assign({}, object,{[name]: title});
  return object;
}
function removeFromPlaylist(object, name){
  delete object.name;
  return object;
}