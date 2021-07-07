let playlist = {
  'Paul McCartney':'Let it Be'
};

function updatePlaylist(obj, name, title) {
  Object.assign(obj, { [name]:title });
}

function removeFromPlaylist(obj, name) {
  delete obj[name];
}

