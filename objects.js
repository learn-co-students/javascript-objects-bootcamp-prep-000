var playlist = {
  "Perturbator": "Hard Wired",
  "Carpenter Brut": "Turbokiller"
};


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete(playlist[artistName]);
}
