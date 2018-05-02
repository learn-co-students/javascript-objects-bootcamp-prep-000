var playlist = { 
  'Bruno Mars': 'Gernade',
  'Ed Sheren': 'Perfect'
};

function updatePlaylist(playListToUpdate, artistName, songTitle) {
  playListToUpdate[artistName] = Object.assign({}, playListToUpdate, { [artistName]: songTitle}); //playListToUpdate[artistName] = songTitle;
  return playListToUpdate;
}
function removeFromPlaylist(playListToUpdate, artistName) {
  delete playListToUpdate[artistName];
  return playListToUpdate;
}