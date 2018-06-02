var playlist = {'The Rolling Stones': 'I Can\'t get No Satisfaction'}

function updatePlaylist(playlist, artist, song) {
    playlist[artist] = song;
    return playlist;
}

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist];
}
