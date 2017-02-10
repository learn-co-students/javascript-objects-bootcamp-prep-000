var playlist = {
                "a-Ha" : "Take On Me",
                "Twenty One Pilots" : "Stressed Out",
                "Big Data" : "The Glow",
                "AWOLNATION" : "Sail",
                "MGMT" : "Electric Feel"
              };//create new object 'playlist'

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, playlist, { [artistName] : songTitle });
}//new Object using playlist, add artist name and song title

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist;
}//remove song title by artist name key, using square brackets dt string
