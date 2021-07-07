/*global describe, it */

 var playlist = {jayz: 'deadPresidents'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;

  return playlist;
}


function removeFromPlaylist(playlist, artistName) {
  var result = delete playlist[artistName];

  return playlist;
}


