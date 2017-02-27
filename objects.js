var playlist = {beatles: "Hey Jude"}

var artist = 'Wes'
var songTitle = 'Bumpin on Sunset'

function updatePlaylist(playlist, artist, songTitle) {
	playlist[artist] = songTitle
	return playlist
}

function removeFromPlaylist(playlist, artist) {
	delete playlist[artist]
	return  playlist
}
var artist = 'Wes'
var songTitle = 'Bumpin on Sunset'

function updatePlaylist(playlist, artist, songTitle) {
	playlist[artist] = songTitle
	return playlist
}

function removeFromPlaylist(playlist, artist) {
	delete playlist[artist]
	return  playlist
}
