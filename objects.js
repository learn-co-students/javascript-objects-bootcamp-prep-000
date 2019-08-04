var playlist = {artistName: "James Brown", songTitle: "Gotta Get Down"}

// function updatePlaylist(playlist, artistName, songTitle) {
//   Object.assign({}, playlist, {[artistName]: artistName});
//   Object.assign({}, playlist, {[songTitle]: songTitle });
//    return playlist
// }

function removeFromPlaylist(playlist, artistName) {
delete playlist.artistName
return playlist
}
