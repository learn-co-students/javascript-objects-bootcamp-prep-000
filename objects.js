var playlist = {
  JayZ: '99 Problems',
  Kanye: 'Gold Digger',
  Biggie: 'Gimme the Loot'
};

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, {
    [artistName]: songTitle});
}

function removeFromPlaylist(thePlaylist, artistsname) {
  delete thePlaylist[artistName];
  return thePlaylist;
}

removeFromPlaylist(playlist, 'Kanye')