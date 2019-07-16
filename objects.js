var playlist = new Object({artist:'Replacements',song:'Waitress In The Sky'});

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

// updatePlaylist(playlist, 'artistName', 'songTitle')

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
}