var playlist = { "pepe": "pepe song" };
var updatePlaylist = (playlist, artistName, songTitle) => playlist[artistName]=songTitle;
var removeFromPlaylist = (playlist, artistName) => delete playlist[artistName];