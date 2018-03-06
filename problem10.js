/*
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
    Find the sum of all the primes below two million.
*/

//This one is too slow. It is recommended to use another algorithm.

function isPrime(num) {
    for(var i = 2; i < num; i++)
    {
        if(num % i === 0) return false;
    }
    return num !== 1;
}

function primeStoreUntil(num) {
    var primeArrayTwo = [];
    var integer = 1;
    for (var i = 2; i < num; i++) {
        if(isPrime(i))primeArrayTwo.push(i);
    }

    return primeArrayTwo;
}

function sumAllPrimesBelow(num)
{
    var primeArray = [];
    primeArray = primeStoreUntil(num);
    var sumOfPrime = 0;
    for(var i = 0; i< primeArray.length; i++)
    {
        sumOfPrime += primeArray[i];
    }
    return sumOfPrime;
}

//Sieve of Eratosthenes Algorithm

function sumAllPrimesBelow2(num)
{
    var sumOfPrime = 0;
    for(var i=2; i<num; i++)
    {
        if(isPrime(i))sumOfPrime += i;
    }
    return sumOfPrime;
}