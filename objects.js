var playlist = new Object({ Phill Ochs: 'Here\'s to the state of Mississipi' });



function updatePlaylist(playlist, artistName, songTitle) {

  (playlist[artistName] = songTitle);

  return playlist;

}

function removeFromPlaylist(playlist, artistName) {

  delete playlist[artistName];

  return playlist;

}
