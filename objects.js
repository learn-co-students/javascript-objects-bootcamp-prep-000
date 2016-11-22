var playlist = {Metallica:"One"};

var updatePlaylist = (playlist, name, songtitle) => {playlist[name] = songtitle; return playlist}

var removeFromPlaylist = (playlist, name) => {delete playlist[name]; return playlist}
