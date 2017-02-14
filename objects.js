var playlist = {
    Biggie: 'Juicy',
    Zepelin: 'Tangerine',
    Kanye: 'Gold Digger'
};

function updatePlaylist(playlist, artistName, songTitle) {
    //add artist and song as a key-value pair to the playlist object. 
    //should return the entire playlist.
    playlist[artistName] = songTitle;
    return playlist;
}
function removeFromPlaylist(playlist, artistName) {
    //should delete the key-value pair from the playlist and
    //return the updated playlist.
    delete playlist[artistName];
    return playlist;
}
//updatePlaylist({}, 'Phil Ochs', "Here's to the State of Mississippi")