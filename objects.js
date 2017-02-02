var playlist = {
  'Michael Jackson': 'Beat It', 
  'Whitney Houston': 'I Will Always Love You'
};

function updatePlaylist(obj, artistName, songTitle) {
  obj[artistName] = songTitle;
  return obj;
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
  return obj;
}
