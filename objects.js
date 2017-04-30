/* Use key value pairing of artistName:songTitle,
artistNames must be unique. */
var playlist = {'Elvis':"Houndog",
                'Aerosmith':"Pink",
                'Guns and Roses': "Sweet child of Mine",
                };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle });
}

function removeFromPlaylist(playlist, artistName) {
  playlist = Object.assign(playlist);
  delete playlist.artistName;
  return playlist;
}
