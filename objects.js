var playlist = {
  michaelJackson: 'thriller',
  bjork: 'where is the line',
  reginaSpektor: 'samson'
};

function updatePlaylist(obj, key, val) {
  obj[key] = val;
  return obj;
};

function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj;
};
