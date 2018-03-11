
var playlist = {'Tahsan' : "Alo", 'Minar' : "Jhoom", 'Ed Sheeran' : "Perfect"};

function updatePlaylist(obj, name, song) {
    return Object.assign({}, {[name] : song})
}
function removeFromPlaylist(playlist, artistName){
    if(delete playlist[artistName]){
        return playlist;
    }
}
