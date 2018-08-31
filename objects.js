var playlist = {
  "Old MacDonald": "had a farm"
};


function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

updatePlaylist(playlist, "some artist", "some song");

function removeFromPlaylist(obj, key) {

  delete obj[key];
  
  return obj;
}

removeFromPlaylist(playlist, "Old MacDonald");

