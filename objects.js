var playlist = {[Dream Theater]: "On The Backs Of Angels", [Alice in Chains]: "Stone"};

function updatePlaylist(list, name, title){
  list.assign({}, playlist, {name: title});
  return list;
}

function removeFromPlaylist(list, name){
  delete list.name;
  return list;
}
