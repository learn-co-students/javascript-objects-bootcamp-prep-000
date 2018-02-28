var playlist = {artist: ''};

// Solution #1:
// function updatePlaylist(thePlaylist, theaArtistName, theSongTitle){
//   return Object.assign({}, thePlaylist, {[theaArtistName]: theSongTitle});
// }

// Solution #2:
function updatePlaylist(thePlaylist, theaArtistName, theSongTitle){
  thePlaylist[theaArtistName] = theSongTitle;
  return thePlaylist;
}

function removeFromPlaylist(thePlaylist, theaArtistName){
  delete thePlaylist[theaArtistName];
  return thePlaylist;
}