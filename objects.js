var playlist = {
                "a-Ha" : "Take On Me",
                "Twenty One Pilots" : "Stressed Out",
                "Big Data" : "The Glow",
                "AWOLNATION" : "Sail",
                "MGMT" : "Electric Feel"
              };

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, playlist, { [artistName] : songTitle });
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist;
}
