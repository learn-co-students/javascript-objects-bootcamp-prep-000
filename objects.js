var playlist={'michael':'blue','Tito':'One love'};
function updatePlaylist(playlist,artistName,songTitle)
{playlist[artistName]=songTitle
return playlist}
function removeFromPlaylist(playlist,artistName)
{delete playlist.songtitle;return playlist;}
