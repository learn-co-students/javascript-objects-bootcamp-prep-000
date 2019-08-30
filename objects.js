
var playlist = { Kanye: "Gold Digger"};

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle;
    return playlist;
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist;
}

console.log(removeFromPlaylist({Kanye: "Gold Digger"}, "Kanye"));
//destructivelyUpdateObjectWithKeyAndValue(car, 'make', '2005');
//console.log(destructivelyUpdateObjectWithKeyAndValue(car, 'make', '2005'));
//console.log(car);
