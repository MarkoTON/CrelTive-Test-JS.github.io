let arrNum1 = [1,2,3,5,7];
let arrNum2 = [1,4,6,7,8];
let arrNowNumbers = [];

function sortArrayNumbers(numbersOne, numbersTwo){
  let joinArrays = arrNum1.concat(arrNum2);
  // console.log(joinArrays);
  
  joinArrays.sort((a,b) => {return a - b});
  
  // console.log(joinArrays);
  
  let newNumberAdd;
  
  for(let i = 0, newNumberAdd = 0; i < joinArrays.length; i++){
    // console.log(joinArrays[i]);
    if(newNumberAdd < joinArrays[i]){
      newNumberAdd = joinArrays[i];
      arrNowNumbers.push(newNumberAdd);
    } 
  }
  console.log(arrNowNumbers);
}

sortArrayNumbers(arrNum1, arrNum2);
