var playlist = {
  "Van Morrison": "Moondance"
};

function updatePlaylist(list,a,b){
  list[a]=b
  return list
}
function removeFromPlaylist(list,a){
  delete list[a];
  return list
}