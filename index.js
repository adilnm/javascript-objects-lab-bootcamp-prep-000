var recipes={egg:3,oil:"2 cups",flour:"3 cups"}
function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({},obj,{[key]: value})

}

function deleteFromObjectByKey(object, key){
  var newObj =  Object.assign({},object)
  delete newObj[key]
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, key){
delete obj[key]
return obj
}

updateObjectWithKeyAndValue(recipes, "kok", "1 lb")
console.log(recipes)
