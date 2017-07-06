var playlist = { CelineDion: 'My Heart Will Go On' }

function updatePlaylist(playlist, artistName, songTitle){
   playlist[artistName] = songTitle;

   return playlist;
}

function removeFromPlaylist(playlist, artistName){
    delete playlist.Kanye;

    return playlist;
}
