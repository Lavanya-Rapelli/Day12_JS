function Solve(a, b, c) {
    let max1 = 0;
    let max2 = 0;
    if(a > b) {
        max1 = a;
        max2 = b;
    } else {
        max1 = b;
        max2 = a;
    }
    
    if(c > max1) {
        max2 = max1;
        max1 = c;
    } else if(c > max2) {
        max2 = c;
    }
    console.log(max2);
  }
  
  // Call the function with test values
  Solve(3, 7, 5); // Example values to test the function
  