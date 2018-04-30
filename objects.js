var playlist = {
  radiohead: "lotus flower", theStrokes: "Is This It?", theTalkingHeads: "The Great Curve", lcdSoundystem: "Home", animalCollective: "The Purple Bottle", theBeachBoys: "Sloop John B" , theSmiths: "Some Girls Are Bigger Than Others", 
}

function updatePlaylist(playlist, artistName, songTitle) {playlist[artistName] = songTitle ; return playlist}

function removeFromPlaylist(playlist, artistName) {delete playlist[artistName] } 

