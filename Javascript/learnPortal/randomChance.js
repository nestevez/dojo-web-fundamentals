function randomChance(quarters, leave){
  if (leave == undefined) {
    leave = 0;
  }
  if (quarters<0){
    console.log("Hold up there, buddy! Looks like you've gambled yourself into debt. If you think you might be struggling with gambling addiction, call 1-800-522-4700. Let's stop playing for now.")
  } else {
    var winner = Math.floor(Math.random()*100);
    var prize;
    while (quarters >= leave+1){
      if (quarters == 0){
        console.log("Looks like you're out of quarters. Insert more to play!");
        return 0;
      } else if (Math.floor(Math.random()*100) == winner) {
        prize = Math.floor(Math.random()*50)+50;
        quarters+=prize-1;
        if (prize >95){
          console.log("!!!!!!!!JACKPOT!!!!!!!!")
        }
        console.log("Winner, winner, chicken dinner! You won "+prize+" quarters! You have a total of "+quarters+" quarters now");
        return quarters;
      } else {
        console.log("Sorry, partner. Looks like you'll have to try again.");
        quarters--;
      }
    }
    return quarters;
  }
}

var quarters = 100;
var stop = 4;
var winnings = randomChance(quarters,stop);
if (stop && winnings==stop) {
  console.log("You left with "+winnings+" quarters in your bucket.");
}
