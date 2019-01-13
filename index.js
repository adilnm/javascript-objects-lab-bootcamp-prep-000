var recipes={egg:3,oil:"2 cups",flour:"3 cups"}
function updateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value
  return obj
}
  var newObj=obj

function deleteFromObjectByKey(obj, key){
  delete newObj.key
  return newObj

}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value
  return obj
}

deleteFromObjectByKey(recipes,"flour")
console.log(newObj)
