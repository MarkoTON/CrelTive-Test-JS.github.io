for(let i = 1; i <= 100; i++){
  if((i % 3 === 0) && (i % 5 === 0)){
    console.log(i + " is Dev with 3 and Ops with 5");
  } 
  else if((i % 3) === 0){
    console.log(i + " is Dev with 3.");
  }
  else if ((i % 5) === 0){
    console.log(i + " is Ops with 5.")
  }
  else {
    console.log(i + " is NOT Dev with 3 and NOT Ops with 5.")
  }
}