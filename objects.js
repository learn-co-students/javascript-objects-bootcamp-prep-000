var playlist={
AFlockOfSeagulls:'SpaceAgeLoveSong',
Muse:'Starlight',
BeastieBoys: 'Sabotage',
FooFighters:'Everlong',
Sia:'TheGreatest',
TilTuesday:'VoicesCarry',
};




function updatePlaylist (playlist,artistName,songTitle) {
  return Object.assign({},playlist,{[artistName]: songTitle});
}

  function removeFromPlaylist (playlist,artistName) {

 delete playlist[artistName];

 return playlist;

  }
