var playlist = {rp: "telugu", sp: "tamil"};

function updatePlaylist(playlist, artistName, songTitle)
{
playlist[artistName] = songTitle;
return playlist;
}
function removeFromPlaylist(playlist, artistName)
{
delete playlist[artistName];
return playlist;
}
