var playlist = { "My Bloody Valentine":"Soon", "Phil Ochs":"Changes", "Slowdive":"Sugar for the pill"}

function updatePlaylist(playlist, artistName, songTitle){ playlist[artistName]=songTitle; return playlist}  

function removeFromPlaylist(playlist, artistName){  delete playlist[artistName]; return playlist} 