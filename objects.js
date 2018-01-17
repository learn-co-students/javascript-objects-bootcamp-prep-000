var playlist = {
  name: title;
}
function updatePlaylist(playlist, name, title){
  Object.assign ({}, playlist, {[name]: title})
  return playlist;
}

function removeFromPlaylist(playlist, name){
  delete playlist.name;
}
