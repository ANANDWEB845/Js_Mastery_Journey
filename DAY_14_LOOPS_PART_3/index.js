// // CONTINUE LOOPS LOGIC VIP PASS ODD NUMBER
for(let i = 1;i<=15;i++){
  if(i%2===0){
    continue;
    }
  console.log(i);
}

// BREAK LOOP THE STOCK MARKET CRASH
for( let a = 100;a>=1;a--){
  
  if(a=== 85){
     console.log("Market crashed trading stopped")
  break;
    
  }
console.log("current price"+ a)
}

// NESTED LOOPS THE CINEMA SEAT MAP
for(let s =1;s<=3;s++){
  let rowdisplay = "Row" + s   ;
  for(let t = 1;t<=4;t++){
   rowdisplay += "Seat" + t ;  
   }
   console.log(rowdisplay)
}