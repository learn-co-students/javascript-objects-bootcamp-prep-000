var playlist = new Object({Kesha: 'Tik Tok', DenzelCurry: 'Ultimate'});
function updatePlaylist(playlist, artistName, songTitle) {return Object.assign(playlist, {[artistName]:songTitle})}
function removeFromPlaylist(playlist, artistName){delete playlist.artistName}