function fancyArray(arr,symbol,reversed){
  if (symbol == undefined){
    symbol = " -> ";
  }
  if (reversed==undefined || reversed == false){
    for(let i = 0; i < arr.length; i++){
      console.log(i+symbol+arr[i]);
    }
  } else {
    for(let i = arr.length-1; i>=0; i--) {
      console.log(i+symbol+arr[i]);
    }
  }
}

var arr = [ "James", "Jill", "Jane", "Jack" ];

// fancyArray(arr);
// fancyArray(arr," :: ");
fancyArray(arr," :: ",true);
