let playlist = {}

const updatePlaylist = (playlist, artistName, songTitle) => playlist[artistName] = artistName
const removeFromPlaylist = (playlist, artistName) => delete playlist[artistName]