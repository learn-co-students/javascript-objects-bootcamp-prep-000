var playlist = {};

console.log(playlist);

playlist['Three Days Grace'] = 'Animal I Have Become';

function updatePlaylist(list, artist, song) {
  return Object.assign({}, list, {[artist]: song})
};

function removeFromPlaylist(list, artist) {
  delete list[artist]
  return list
};
