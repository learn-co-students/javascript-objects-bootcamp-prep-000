var playlist = {
  'Panic': 'Porch Song', 
  'The Dead': 'Cassidy', 
  'Allman Brothers': 'Stormy Monday'
};
function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}
function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj;
}