var playlist = {name: "title"};

function updatePlaylist(obj, name, title) {
  obj[name] = title;
  return obj
}

function removeFromPlaylist(obj, name) {
  var n = name;
  delete obj[n];
  return obj
}
