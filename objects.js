var playlist = {'Andrea Mendez': "Bring Me Love", 'Justin Garret': "There Must Be Music", 'Way Out West': "Ajare"}

function updatePlaylist(playlist, artistName, songTitle) { playlist[artistName] = songTitle; return playlist}

function removeFromPlaylist(playlist, artistName) {delete playlist[artistName]; return playlist}
