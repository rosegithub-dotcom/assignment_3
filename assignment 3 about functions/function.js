function sum(a, b) {
    return a + b;
  } 
  console.log(sum(2,3));

  

  function square(number) {
    return number * number;
  }
  console.log(square(5))
  
  for (let r = 1; r <= 10; r++) {
    const squaredNumber = square(r);
    console.log(`The square of ${r} is ${squaredNumber}`);
  }
  