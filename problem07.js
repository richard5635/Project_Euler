/*
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
    we can see that the 6th prime is 13.
    What is the 10 001st prime number?
*/

function isPrime(num) {
    for(var i = 2; i < num; i++)
    {
        if(num % i === 0) return false;
    }
    return num !== 1;
}

function primeOrder(num) {
    var primeArray = [];
    var integer = 1;
    var primeNumber;
    for (var i = 0; i < num; i++) {
        while (!isPrime(integer)) integer++;
        primeArray.push(integer); integer++;
    }

    return primeArray[num - 1];
}