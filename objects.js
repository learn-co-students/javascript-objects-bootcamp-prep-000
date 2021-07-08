var playlist={Teni:'Case'};
function updatePlaylist(playlist,artistName,songTitle){
playlist[artistName]='song Title'
return playlist
}
function removeFromPlaylist(playlist, artist){
delete playlist[artist];
}
