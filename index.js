var recipes={egg:3,oil:"2 cups",flour:"3 cups"}
function updateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, valu){
  
  return Object.assign(obj,{key:value})

}
