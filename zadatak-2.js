function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) {
    return 1; 
  } else {
    while (num > 1) { 
      num--;
      result *= num;
    }
    return console.log(result);
  }
}
factorialize(5);
