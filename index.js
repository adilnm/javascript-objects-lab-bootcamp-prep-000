var recipes={egg:3,oil:"2 cups",flour:"3 cups"}
function updateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value
  return obj
}
function deleteFromObjectByKey(obj, key){
  var newObj=obj
  delete newObj.key
  return newObj

}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value
  return obj
}

updateObjectWithKeyAndValue(recipes, "kok", "1 lb")
console.log(recipes)
