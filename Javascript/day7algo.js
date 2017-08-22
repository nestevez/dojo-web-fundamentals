//invert hash, take the values of an object's keys and make then the keys, the keys then the values

function invertHash(object){
    var key_list=[];
    var val_list=[];
    for(var key in object){
        key_list.push(key);
        val_list.push(object[key]);
    }
    object= {};//zeros out object
    for(var i=0; i<key_list.length,i++){
      object[val_list[i]]=key+list[1];
    }
    return object;
}

//also take into consideration if there are values that are equal and make the new value of their key into an array

function invertHash(object){
  var key_list=[];
  var val_list=[];
  for(var key in object){
    key_list.push(key);
    val_list.push(object[key]);
  }
  object= {};//zeros out object
  for(i=0;i<key_list.length;i++){
    if(object[val_list[i]]){
      if(typeof object[val_list[i]] === "object"){
        object[val_list[i]].push(key_list[i]);
      } else {
        object[val_list[i]] = [object[val_list[i]], key_list[i]]
      }
    } else{
      object[val_list[i]]=key_list[i];
    }
  }
  return object;
}

console.log(invertHash({1:"a", 2:"b", 3:"c", 4:"a"}))


//to account for arrays in the object

function invertHash(object){
    var key_list=[];
    var val_list=[];
    for(var key in object){
        if(typeof (object[key]==="object")){
            for(var k=0;k<object[key].length;k++){
                key_list.push(key);
                val_list.push(object[key][k]);
            }
        }else{
        key_list.push(key);
        val_list.push(object[key]);
    }

    }
    object= {};//zeros out object
for(i=0;i<key_list.length;i++){
  if(object[val_list[i]]){
      if((typeof (object[val_list[i]])) === "object"){
          object[val_list[i]].push(key_list[i]);
      } else {
          object[val_list[i]] = [object[val_list[i]], key_list[i]]
      }
  }
  else{
    object[val_list[i]]=key_list[i];
}
}
return object;
}

console.log(invertHash({1:"a", 2:["a", "b"], 3:"c", 4:"a"}))
