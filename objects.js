var playlist = new Object();
playlist = {
  "John": "What's going on?",
  "Mark": "I do not know"
};

function updatePlaylist(obj, keys, value){
  obj[keys] = value
  return obj
}

function removeFromPlaylist(objs, keys){
  delete objs[keys]
  return objs
}

