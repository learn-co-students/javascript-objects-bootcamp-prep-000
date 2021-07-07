var meals = {breakfast: "oatmeal"};

const recipe = {eggs: 4}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, { [key]: value})
}

var playlist = {Chris: 'Broken Halos'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}