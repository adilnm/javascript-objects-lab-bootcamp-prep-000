var recipes={egg:3,oil:"2 cups",flour:"3 cups"}
function updateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value
  return obj
}
function deleteFromObjectByKey(obj, key, value){
  
  return Object.assign(obj,{key:value})

}

updateObjectWithKeyAndValue(recipes, "kok", "1 lb")
console.log()
