function aFewBillion(){
  var arr = [];
  var daily = 0.01;
  var sum = 0;
  var thouDay = 0;
  for (let i=1;i<=30;i++){
    sum+=daily;
    if (sum>=10000){
      if (thouDay == 0){
        thouDay=i;
      }
    }
    daily*=2;
  }
  console.log("How much was the reward after 30 days?");
  console.log("$",sum);
}

function howLongTil(num){
  var daily = 0.01;
  var day = 1;
  var sum = 0;
  while(sum<num){
    sum+=daily;
    day++;
    daily*=2;
  }
  console.log((day-1)+" days");
}

aFewBillion();


console.log("How many days will it take the servant to make $10,000?");
howLongTil(10000);
console.log("How about 1 billion?")
howLongTil(1000000000);
console.log("How many days until the servant has infinite (according to JavaScript) money?");
howLongTil(Infinity);
