// Tried initially to do this non-destructively but it worked instantly when I made it destructive

function updatePlaylist(obj, key, value) {
	// return Object.assign({}, obj, { [key]: value }); 
	obj[key] = value
}

const playlist = {'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes'}

updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi')


function removeFromPlaylist(obj, key) {
	delete playlist.Slowdive;
}