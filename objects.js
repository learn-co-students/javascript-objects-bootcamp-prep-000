//var playlist = { artists: "songtitle");
//var playlist = new Object ({artist: 'songtitle'});

var playlist = {
  artistnames: 'song titles',
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
    
}


function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlsit
}