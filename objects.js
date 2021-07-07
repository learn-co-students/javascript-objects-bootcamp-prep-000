var playlist ={artist: 'title'};

playlist.Outkast='DEEP';

playlist[KRIT]= 'DREAMS';

function updatePlaylist(playlist,artist,title){
          playlist[artist]= title;
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
}