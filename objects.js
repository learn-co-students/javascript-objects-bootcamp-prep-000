var playlist = {Slowdive: 'Alison', 'My Bloody Valentine': 'Sometimes'};

function updatePlaylist(targetPlaylist, artistName, songName){
  return targetPlaylist[artistName] = songName;
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");


function removeFromPlaylist(targetPlaylist, artistName){
  delete targetPlaylist[artistName];
  return targetPlaylist;
}
removeFromPlaylist(playlist, Slowdive);

