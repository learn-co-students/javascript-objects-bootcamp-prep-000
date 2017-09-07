var playlist = new Object({Kesha: 'Tik Tok', DenzelCurry: 'Ultimate'});
function updatePlaylist(playlist, artistName, songTitle) {return Object.assign(playlist, {[artistName]:songTitle})}
