var playlist = {
  redHotChiliPeppers: "cantStop",
  radiohead: "lucky",
  catPower: "ruin"
}

function updatePlaylist(playlist, fionaApple, sleepToDream) {
  
  playlist[fionaApple]=sleepToDream
  
}

function removeFromPlaylist(playlist, radiohead){

delete playlist[radiohead];

}



