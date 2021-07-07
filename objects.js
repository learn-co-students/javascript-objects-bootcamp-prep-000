var playlist = { Slowdive: "Alison", Sometimes: 'My Bloody Valentine'}
function updatePlaylist(playlist, artistName, songTitle) { playlist[artistName]= songTitle
return playlist }
function removeFromPlaylist(playlist, artistName) {delete playlist.Slowdive 
return playlist}