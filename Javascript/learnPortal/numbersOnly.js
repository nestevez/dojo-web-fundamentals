function numbersOnly(arr){
  var newArr = [];
  for (let i = 0; i <arr.length; i++){
    if (typeof arr[i] === "number"){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function removeNonNumbers(arr){
  var count =0;
  for (var i=0; i<arr.length;i++){
    if (typeof arr[i] != "number"){
      for (var j=i; j<arr.length-1;j++){
        arr[j]=arr[j+1];
      }
      arr.length--;
      i--;
    }
  }
  return arr;
}

var arr=[4,75,"AFDV",546,34,65,"SBAEF","aerG",4337,false,null,true];
// console.log(numbersOnly(arr));
console.log(removeNonNumbers(arr));
