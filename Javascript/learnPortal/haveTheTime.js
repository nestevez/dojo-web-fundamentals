function haveTheTime(hour, minute, period){
  var befaft;
  var morneve;
  if (hour>12){
    if (hour>24){
      console.log("I don't have a real time for you. Sorry!");
    } else {
      hour-=12;
    }
  }
  if (minute==5){
    befaft = "It's 5 past "+hour;
  } else if(minute==15){
    befaft = "It's a quarter past "+hour;
  } else if (minute<30){
    befaft = "It's just after "+hour;
  } else if (minute==30){
    befaft = "It's half past "+hour;
  } else if (minute>30){
    befaft = "It's almost "+(hour+1);
  } else if (minute==45){
    befaft = "It's a quarter 'til "+(hour+1);
  } else if (minute==55) {
    befaft = "It's 5 'til "+(hour+1);
  } else if (minute== 0) {
    befaft = "It's "+hour+" o'clock";
  }
  if (period=="AM" || period == "am"){
    if (hour==12){
      morneve=" midnight";
    } else {
      morneve=" in the morning";
    }
  } else if (period=="PM" || period == "pm"){
    if (hour==12){
      morneve=" noon";
    } else if (hour<=5){
      morneve=" in the afternoon";
    } else if (hour>5 && hour<8){
      morneve=" in the evening";
    } else if (hour>=8) {
      morneve=" at night";
    }
  }
  console.log(befaft+morneve);
}

var hour = 23;
var minute = 05;
var period = "pm"
haveTheTime(hour, minute, period);
