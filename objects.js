var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist.artistName = songTitle
    return Playlist
}

function removeFromPlaylist(playlist, artistName, songTitle){
    delete playlist.artistName;
    return Playlist
}
