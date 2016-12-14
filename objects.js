//const playlist = new Object({artistsname: 'song titles'});
var playlist = {artistsname: "songtitles"};

function updatePlaylist(playlist, artistName, songTitle){
    return Object.assign({}, playlist, {[artistName]:songTitle})
}
function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];
    return playlist


}
