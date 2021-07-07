var playlist = {
   'maherzain': 'Radhitu',
   'samiyusuf': 'muallim'
}

function updatePlaylist(obj, key, value) {
   obj[key] = value;
   return obj;
}

function removeFromPlaylist(obj, name) {
   delete obj[name];
   return obj;
}
