function Solve(n) {
    let sum = 0;
    for(let i = 1; i <= n; i+=5){
        sum = sum + 1;
        if(sum >= n){
            break;
        }
    }
    console.log(sum);
}

// Call the function with a test value
Solve(20); // Example value to test the function
