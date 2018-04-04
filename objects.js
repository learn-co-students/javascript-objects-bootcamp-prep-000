var playlist = {'Cake' : 'Sheep_Go_To_Heaven'};

function updatePlaylist(playlist, artist, song){
    return Object.assign(playlist, playlist,{[artist]:song})
}

function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];
    return playlist;
}
