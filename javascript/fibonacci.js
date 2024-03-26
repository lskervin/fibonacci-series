function fibonacci(num) {
  let fibonacci = []; // Create an array to store Fibonacci sequence

  // Check if num is 0
  if (num === 0) {
    fibonacci.push(0); // Push 0 to the fibonacci array
    return fibonacci[num]
  } else if (num === 1) {
    fibonacci.push(0, 1); // Push 0 and 1 to the fibonacci array
    return fibonacci[num]
  } else if (num >= 2){
    fibonacci.push(0, 1); // Push 0 and 1 to the fibonacci array
    // make and append subsequent Fibonacci numbers
    for (let i = 2; i < 29; i++) {
      let fibNum = fibonacci[i - 1] + fibonacci[i - 2]; // Calculate Fibonacci number
      fibonacci.push(fibNum); // Push Fibonacci number to the fibonacci array
    }
  }

  return fibonacci[num]; // Return the fibonacci array containing Fibonacci sequence
}






if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
