var playlist = {artistName:songTitle};

function updatePlaylist(playlist, artist, songTitle){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
    delete playlist[artist];

    return playlist;
}
