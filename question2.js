function Solve(N) {
    for(let i = 1; i <= N; i++){
        let row = "";
        for(let j = 1; j <= i; j++){
            row += j + " ";
        }
        console.log(row);
    }
}

// Call the function with a test value
Solve(5); // Example value to test the function
