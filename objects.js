var Playlist = new Object({'Elton John', 'GoodBye Yellow Brickroad'});

function updatePlaylist(Playlist,name, song)
{
return Object.assign(Playlist, { name: song })
}
function removeFromPlaylist(Playlist,name) {
  delete Playlist.name;
}
