// creates an object with the keyname artistName and value songTitle
var playlist = {artistName: "songTitle"}

// creates a function that adds the artistName: songTitle key-value pair to the
// object, playlist
function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

// creates a function that removes artistName from the object, playlist
function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj;
  }
