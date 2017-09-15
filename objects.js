var playlist = {youngMA: 'OOUUU', bobbyShmurda: 'Hot Nigga'};
function updatePlaylist(obj, artist, song){obj[artist]=song;return obj};
function removeFromPlaylist(obj, key){delete obj[key];return obj};
