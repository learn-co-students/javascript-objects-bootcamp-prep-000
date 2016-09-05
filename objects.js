var playlist = {};
playlist.Eric = "Rules"

var updatePlaylist = function(playlist, artistName, songTitle)  {
    playlist[artistName] = songTitle;
    return playlist;
}

var removeFromPlaylist = function(playlist, artistName, songTitle)  {
    delete playlist[artistName];
    return playlist;
}
