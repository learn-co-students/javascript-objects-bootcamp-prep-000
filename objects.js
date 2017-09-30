var playlist = {name1:'Title1', name2:'Title2', name3='Title3'}

function updatePlaylist(object, name, title)
{
  object[name]= title;
  return object
}

function removeFromPlaylist(object, name)
{
  delete object[name]
  return object
}
