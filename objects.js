var playlist = {
  "David Bowie": "Ziggy Stardust",
  "Michael Jackson": "Thriller"
};

function updatePlaylist(object, name, title){
  return Object.assign({}, object, {[name]: title});
}

function removeFromPlaylist(object, name){
  delete object[name];
  return object;
}
