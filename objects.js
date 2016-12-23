var playlist = {
  'JJ': 'samjhana',
  'weekend': 'star boy'
};

function updatePlaylist (obj, index, value) {
   obj[index] = value;
  return obj;
}

function removeFromPlaylist(obj, index) {
   delete obj[index];
   return obj;
 }
