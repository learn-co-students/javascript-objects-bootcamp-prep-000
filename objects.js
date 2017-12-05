var playlist = {Porter: 'Language'};

function updatePlaylist(thePlaylist, artistName, songTitle) {
  thePlaylist[artistName] = songTitle;
  return thePlaylist;
}
function removeFromPlaylist(playlist2, artistName2) {
  delete playlist2[artistName2];
  return playlist2;
}