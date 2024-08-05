function Solve(N) {
    let flag = false;
    for(let i = 0; i < 10; i++){
        let sum = 0;
        while(N > 0){
            let remainder = N % 10;
            sum += remainder ** 2;
            N = Math.floor(N / 10);
        }
        N = sum;
        if(sum === 1){
            flag = true;  
            break; // Add break to exit the loop once 1 is found
        }
    }
    
    if(flag){
        console.log("Yes");
    } else {
        console.log("No");
    }
}

// Call the function with a test value
Solve(19); // Example value to test the function
