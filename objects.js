
var playlist = new Object({ artist: 'song title'})

function updatePlaylist(obj, artist, song) 
{
obj[artist] = song

 return obj
}

function removeFromPlaylist (obj, artist) 
{

delete obj[artist]

return obj
}
