var playlist = new Object({Beyonce: 'Halo'});

function updatePlaylist(playlist, artist, song) {
    playlist[artist] = song;
    return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
//4. Create a function `removeFromPlaylist` which accepts two arguments (the playlist object and the artist name). The
//body of the function should delete the key-value pair from the playlist and return the updated playlist.
