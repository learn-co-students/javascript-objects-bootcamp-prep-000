var playlist = new Object({Akon: "na na na", eminem: "walk alone"});
function updatePlaylist(obj, key, value){
  obj[key] = value;
  return obj;
}
function removeFromPlaylist(playlist,artistName){
delete playlist[artistName];
return playlist;
}
