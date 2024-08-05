function Solve(n) {
    if (isPowerOfTwo(n)) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

function isPowerOfTwo(num) {
    if (num <= 0) {
        return false;
    }
    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num = num / 2;
    }
    return true;
}

// Call the function with a test value
Solve(16); // Example value to test the function
