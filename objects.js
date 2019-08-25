var playlist = {
  ledZepplin:"Stairway To Heaven"
}

var updatePlaylist = (obj,artistName,songTitle) =>{
  return Object.assign(obj,{[artistName]:songTitle})
}

var removeFromPlaylist = (obj, artistName) =>{
  delete obj[artistName];
  return obj
}

