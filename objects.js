var playlist = {
  static: "zohav",
  talisman: "ad hamidbar"
}

function updatePlaylist(list, artistName, songTitle){
  // list[artistName] = songTitle
  return Object.assign({}, list, { [artistName]: songTitle })
}

function removeFromPlaylist(list, artistName){
  delete list[artistName]
  return list

}

// console.log("original")
// console.log(playlist)
// console.log("new")
// console.log(removeFromPlaylist(playlist, "static"))
// console.log("original?")
// console.log(playlist)
