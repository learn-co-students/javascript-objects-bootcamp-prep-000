var playlist = {
  Queen: "Fat Bottomed Girls",
  Juvenile: "Back That Azz Up",
  SirMixALot: "Baby Got Back",
  BellDivDaVoe: "Poison"
}
function updatePlaylist (object, key, value) {
  object[key] = value
  return object
}
function removeFromPlaylist (object, key) {
  delete object[key] 
  return object 
}