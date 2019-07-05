var playlist = {'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"}; 
function updatePlaylist(a, b, c) { return Object.assign({}, a, { [b]: c }) }
function removeFromPlaylist(a, b) { delete a[b]; return playlist}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
removeFromPlaylist(playlist, 'Slowdive');