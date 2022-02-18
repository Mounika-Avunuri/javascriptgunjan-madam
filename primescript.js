
 
// JavaScript implementation of the approach
let N = 5;
 
// To check if a number is prime or not
let isprime = new Array(N).fill(true);
 
// To store possible numbers
let can = new Array(N).fill(false);
 
// Function to return all prime numbers
function SieveOfEratosthenes()
{
 
    for (let p = 2; p * p < N; p++)
    {
 
        // If prime[p] is not changed,
        // then it is a prime
        if (isprime[p] == true)
        {
 
            // Update all multiples of p greater
            // than or equal to the square of it
            // numbers which are multiple of p and are
            // less than p^2 are already been marked.
            for (let i = p * p; i < N; i += p)
                isprime[i] = false;
        }
    }
 
    let primes = new Array();
    for (let i = 2; i < N; i++)
        if (isprime[i])
            primes.push(i);
 
    return primes;
}
 
// Function to count all possible prime numbers
// that can be expressed as the sum of two
// consecutive primes and one
function Prime_Numbers(n)
{
    let primes = SieveOfEratosthenes();
 
    // All possible prime numbers below N
    for (let i = 0; i < primes.length - 1; i++)
        if (primes[i] + primes[i + 1] + 1 < N)
            can[primes[i] + primes[i + 1] + 1] = true;
 
    let ans = 0;
    for (let i = 2; i <= n; i++)
    {
        if (can[i] && isprime[i])
        {
            ans++;
        }
    }
 
    return ans;
}
 
// Driver code
let n = 5;
console.log(Prime_Numbers(n));
 
// This code is contributed by gfgking
 
 var fruits = ['Apple','Banana','Graphes'];
 console.log(fruits.length);
 fruits.push('orange');
 console.log(fruits);
 //Access an Array item using the index position.
 console.log(fruits[0]);
 
 let first = fruits[0];
 console.log(first);
 let last = fruits[fruits.length-1];
 console.log("last item is  =====>",last);
 //Loop over an Array
 fruits.forEach(function(item,index,array){
console.log(item,index);Loop over an array
 });
 //loop over an array
 fruits.forEach(function(item,index,array){
     console.log(item,index);
 }

    );
    let newLast =fruits.pop();
    console.log(newLast);
    console.log(fruits);
let shiftFruits = fruits.shift();
console.log(shiftFruits);