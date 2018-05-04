var playlist = {Cent_30:'Gangsta',Kefha:'Wobbly',Duchess_Gogo:'Bridge_Face'};

function updatePlaylist(playlist,artname,songtitle) {
  playlist[artname] = songtitle
  // we could not use playlist.artname = songtitle
  return playlist
}

function removeFromPlaylist(playlist,artname) {
  delete playlist[artname]
  return playlist
}