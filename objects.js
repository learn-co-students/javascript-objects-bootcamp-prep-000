var playlist = {bishop: 'river', altj: 'cold blood'};
function updatePlaylist(obj, name, title)
{
  return Object.assign({}, obj, {[name]: title});
}

function removeFromPlaylist(obj, name)
{
  delete obj[name];
  return obj;
}
