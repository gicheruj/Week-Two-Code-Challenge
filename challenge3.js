/* This is a function which determines whether a number is a prime number or not*/
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    let i = 2;
    while (i * i <= num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}
/* This is a function which calls the above function above and uses it to 
determine whether the numbers in the given array are prime numbers and prints
the prime numbers*/
function primeNumbers(numbers = []) {
    const primeArray = [];
    for (const num of numbers) {
        if (isPrime(num)) {
            primeArray.push(num);
        }
    }
    console.log(primeArray);
}

primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

