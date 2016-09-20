var playlist = { ACDC: "Thunderstruck",  FooFighters: "Learn To Fly", Marshmello: "UltraMix"}

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
// playlist = playlist
// artistName = "FooFighters"
// var thing = playlistValue(playlist, artistName)
//
// function playlistValue(playlist, artistName){
//   return playlist[artistName]
// }

// arr = []
// cats = ["Garfiled", "Nermal", "Harold"]
// cats[0] => "Garfield"
// obj = {}
// pockets = {"back": "Wallet", "chest":"pens", "hip":{"quarters":3, "dimes":2, "nickels":6}, "watch":"Watch"}
// pockets["hip"]
//      => "knife"
// pockets.hip => "knife"
// pockets.hip == "Coins"
//      => false
// pockets.hip => {"quarters":3, "dimes":2, "nickels":6}
// pockets.watch = "Watch"
// pockets.hip.dimes => 2
// pockets.sayMyName
// pockets.empty
// pockets.countCoins = function(){
//   return this.hip.dimes + this.hip.quarters
// }

updatePlaylist({}, "Hootie and the Blowfish" , "Hold my hand")
