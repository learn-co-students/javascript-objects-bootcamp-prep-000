var playlist = new Object({
breakfast: "toast"
})
function updatePlaylist(playlist, artistName, songTitle) {
var artist = artistName
playlist[artist] = songTitle
return playlist
}
function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName]
return playlist
}
