
function isprm(n)
{
    // Base Case
    if (n <= 1)
        return 0;
    if (n <= 3)
        return 1;
    if (n % 2 == 0 || n % 3 == 0)
        return 0;
 
    // Iterate till [5, sqrt(N)] to
    // detect primality of numbers
    for (var i = 5;
         i * i <= n; i = i + 6) {
 
        // If N is divisible by i
        // or i + 2
        if (n % i == 0 || n % (i + 2) == 0)
            return 0;
    }
 
    // Return 1 if N is prime
    return 1;
}
 function countprime(n)
{
    // Initialize count as 0
    var count = 0;
 
    // Stores prime numbers
    var primevector = [];
 
    for (var i = 2; i <= n; i++) {
 
        // If i is prime
        if (isprm(i) == 1) {
            primevector.push(i);
        }
    }
 
    // Initialize the sum
    var sum = primevector[0];
 
    // Find all required primes upto N
    for (var i = 1;
         i < primevector.length; i++) {
 
        // Add it to the sum
        sum += primevector[i];
        if (sum > n)
            break;
        if (isprm(sum) == 1) {
            count++;
        }
   
 
    }
 
   
 
    // Return the final count
    return count;
}
 
// Driver Code
// Given number N
var N = 45;
// Function Call
console.log( countprime(N));
         
