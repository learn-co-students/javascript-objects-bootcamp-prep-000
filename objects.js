playlist = {"name" : "title"};

function updatePlaylist(myObj,name,title)
{
  myObj[name] = title;
  return myObj
}

function removeFromPlaylist(myObj,name)
{
  delete myObj[name]
  return myObj
}
