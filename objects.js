var playlist = new Object({
  "rick ross":"larmboghini",
  "lionel":"Easy like sunday morning",
  "Tekno":"Pana",
});


function updatePlaylist(obj,key,value) {

  return Object.assign(obj,{[key]:value});
}


function removeFromPlaylist(obj, key) {

  Delete obj[key];

  return obj;
}
