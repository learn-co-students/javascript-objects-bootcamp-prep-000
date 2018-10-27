var playlist = { 'Johhny Cash': 'I Walk the Line' }

function updatePlaylist ( playlist, artistName, songTitle ) { playlist[artistName] = songTitle }

function removeFromPlaylist ( playlist, artistName ) { delete playlist[artistName] }
