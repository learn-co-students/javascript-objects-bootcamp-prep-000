var playlist = {
  artistName: "songTitles"
};

console.log(playlist);

function updatePlaylist( object, key, value) {
  object[key] = value;
  return object;
  
}

function removeFromPlaylist( obj, key) {
  delete obj[key];
  return obj;
}