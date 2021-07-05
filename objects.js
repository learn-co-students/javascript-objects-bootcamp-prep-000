var playlist = { 'Slowdive' : 'Alison' };

function updatePlaylist(obj, key, value){ //key and value are string literal
   return Object.assign(obj, {[key]: value});
   // return newlist;
}

function removeFromPlaylist(obj, key){
   delete obj[key];
   return obj;
}

console.log(playlist);
console.log(updatePlaylist(playlist, 'My Bloody Valentine', 'Sometimes'));
console.log(updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi"));
console.log(removeFromPlaylist(playlist, 'Slowdive'));
