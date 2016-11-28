

var playlist = new Object({name:"Song"});

function updatePlaylist (obj, key, value) {

  return Object.assign({}, obj, { [key]: value})
}


function removeFromPlaylist(list, artistName) {

  delete list[artistName]
  return list
}
