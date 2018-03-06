/*
    Find the difference between the sum of the squares of the 
    first one hundred natural numbers and the square of the sum.
*/

function sumOfSquare(endOfRange)
{
    var result = 0;
    for(var i = 1; i <= endOfRange; i++)
    {
        result += Math.pow(i,2);
    }
    return result;
}

function squareOfSum(endOfRange)
{
    var result = 0;
    for(var i = 1; i <= endOfRange; i++)
    {
        result += i;
    }

    return Math.pow(result,2);
}

function diffSOS(endOfRange)
{
    return Math.abs(sumOfSquare(endOfRange) - squareOfSum(endOfRange));
}