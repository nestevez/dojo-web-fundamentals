function rangePrint(start,end,skip){
  if (skip == undefined){
    skip=1;
  }
  if (end == undefined){
    end = start;
    start = 0;
  }
  if (end<start){
    for (let i = start;i > end;i -= skip){
      console.log(i);
    }
  } else {
    for (let i = start;i < end;i += skip){
      console.log(i);
    }
  }
}

rangePrint(2,10,2);
rangePrint(2,10);
rangePrint(5);
