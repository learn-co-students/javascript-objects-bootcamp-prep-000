var playlist = { artistnames: 'song titles' 
};
      playlist = Slowdive;
      playlist.songTitle  = 'My Bloody Valentine';
      playlist.artistName = 'Phil Ochs';

function updatePlaylist(playlist, artistName, songTitle){
        playlist[artistName] = songTitle;
        return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

