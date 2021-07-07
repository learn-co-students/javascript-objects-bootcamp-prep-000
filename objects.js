var playlist = {
  ACDC: 'highway to hell',
  Nirvana:'smells like teen spirit',
  ABBA: 'dancing queen'
};

function updatePlaylist(playlist, artist, song) { 
  playlist[artist]= song; 
  return playlist;
  
  
}
updatePlaylist(playlist,'Slowdive', 'Alison');
console.log(playlist);

updatePlaylist(playlist, 'My Bloody Valentine', "Sometimes" );
console.log(playlist);

updatePlaylist(playlist, 'Phil Ochs', "Here's To The State Of Mississippi" );
console.log(playlist);


function removeFromPlaylist(playlist, artist){
  delete playlist.Slowdive;
  return playlist;
}
