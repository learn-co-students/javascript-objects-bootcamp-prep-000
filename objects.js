var playlist = new Object({NoDoubt: "Spiderwebs"})
function updatePlaylist(playList, artistName, songTitle){playlist[artistName] = songTitle; return playlist}
function removeFromPlaylist(playlist, artistName){delete playlist[artistName]; return playlist}
