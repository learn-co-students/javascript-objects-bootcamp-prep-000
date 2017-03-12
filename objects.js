//var playlist = [ { artist: 'Michael Jackson', song: 'thriller' },
//                 { artist: 'Michael Jackson', song: 'Beat it' },
//                 { artist: 'Guns n Roses', song: 'Living on a Prayer' }
//               ];

var playlist =  {};
playlist = { artistName: ''};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
