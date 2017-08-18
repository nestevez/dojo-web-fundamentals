function whileYouWait(daysLeft){
  for (let i = daysLeft;i>=0;i--){
    if (i>30){
      console.log(i+" whole days until my birthday. It seems so far away...");
    } else if (i<=30 && i>5) {
      console.log("Only "+i+" days until my birthday! That's less than a month!");
    } else if (i<=5 && i>0){
      console.log("EHR MERH GERHD! "+i+" DAYS TIL MY BIRTHDAY!!");
    } else {
      console.log("!!!!!HAPPY BIRTHDAY!!!!!");
    }
  }
}

whileYouWait(30);
