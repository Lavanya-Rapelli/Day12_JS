function Solve(N){
    let sum = 0;
    N = Math.abs(N);
    while(N > 0){
        sum += N % 10;
        N = Math.floor(N / 10);
    }
    console.log(sum);
}

// Call the function with a test value
Solve(123); // Example value to test the function
