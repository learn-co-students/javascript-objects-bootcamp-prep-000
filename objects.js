var playlist = {
  Myth: "Beach House",
  Odesza: "A Moment Apart"
};

function updatePlaylist( obj, artist, song ) {
  var updatedPlaylist = Object.assign( {}, obj, { [artist]: song });
  return updatedPlaylist;
}

function removeFromPlaylist( playlist, artist ) {
  delete playlist[ artist ];
  return playlist;
}
