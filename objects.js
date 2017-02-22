var playlist = {'Iyanya': 'Kukere', 'Flavour': 'Sexy Rosey'}

function updatePlaylist(thePlaylist, artistName, songTitle) {
  thePlaylist[artistName] = songTitle
  return thePlaylist
}

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName]
  return thePlaylist
}
