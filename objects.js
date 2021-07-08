var playlist = {
  artistName: 'Charles Aznavour',
  songTitle: 'Hier Encore'
};

function updatePlaylist(playlist, artistName, songTitle) {
  // playlist['artistName'] = artistName;
  // playlist['songTitle'] = songTitle;
  playlist[artistName] = songTitle;
  
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  
  return playlist;
}