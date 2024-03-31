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

