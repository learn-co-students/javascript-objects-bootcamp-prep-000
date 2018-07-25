var playlist = { beyonce: "partition" }
function updatePlaylist(playlist, artistName, songTitle) { playlist.adele = 'summer'; return Object.assign( {}, playlist, { [adele]: 'summer'}) }
function removeFromPlaylist(playlist, artistName) { delete playlist.summer; return playlist }
