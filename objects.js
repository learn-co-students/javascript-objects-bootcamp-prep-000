var playlist = { Slowdive : 'slowSong'}

function updatePlaylist(playlist, artistName, songTitle){
playlist['My Bloody Valentine'] = "whenYouSleep"
playlist['Phil Ochs'] = "ochsSong"
return playlist
}

function removeFromPlaylist(playlist, artistName){

delete playlist.Slowdive

return playlist
}
