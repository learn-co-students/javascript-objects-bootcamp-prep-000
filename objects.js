var playlist = {
    Hank_Williams: "Ramblin' Man",
    Moldy_Peaches: "Steak For Chicken",
    Nas: "Take It In Blood"
};

function updatePlaylist(playlist, artist, song){
    playlist[artist] = song;
    //return Object.assign({}, playlist, {artist: song});
}

function removeFromPlaylist(playlist, artist){
    delete playlist[artist];
}