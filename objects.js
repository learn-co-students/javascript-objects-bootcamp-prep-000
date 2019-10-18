var playlist = new Object()

function updatePlaylist(myplaylist, artist, song) {
  myplaylist = Object.assign({}, myplaylist, {[artist]:song})
  return myplaylist
}


function removeFromPlaylist(myplaylist, artist) {
  delete myplaylist[artist]
  return myplaylist
}
