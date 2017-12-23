var playlist = {
    'Glen Campbell': "Rhinestone Cowboy",
    'Don Williams': "I Believe in You",
    'Anne Murray': "Snowbird",
    'Kanye': "Gold Digger"
};

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, playlist, {[artistName]: songTitle});
    //it's important that we merge everythig into a new object, like {}.
    //Otherwise, the original object will be modified.
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist['Kanye'];
    return playlist;
}


