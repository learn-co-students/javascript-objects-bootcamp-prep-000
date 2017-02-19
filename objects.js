var playlist = {artistName: 'songTitle'};

function updatePlaylist(currentPlaylist, artist, song) {
  currentPlaylist[artist] = song;

  return currentPlaylist;
}

function removeFromPlaylist(currentPlaylist, artist) {
  var deleteArtist = artist;
  console.warn(currentPlaylist);
  console.warn(artist);

  console.warn(delete currentPlaylist[deleteArtist]);
  
  console.warn(currentPlaylist);

  return currentPlaylist;
}