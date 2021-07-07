const playlist = { sublime : "sumertime"};
function updatePlaylist(playlist, arist, title){ Object.assign(playlist, {[arist]: [title]}); return playlist}
function removeFromPlaylist( playlist, arist){ delete playlist[arist]; return playlist}
