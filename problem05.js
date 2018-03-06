/* 
What is the smallest positive number that is 
evenly distributed by all of the numbers from 1 to 20?

Take the Least Common Multiple of a Range of Numbers
*/

var lcm = function(a,b)
{
    //lcm is defined as::
    //lcm(a,b) = abs(a*b) / gcd(a,b)
    if (isNumber(a) && isNumber(b))
    {
        if(!isInteger(a) || !isInteger(b))
        {
            throw new Error('Parameters in function lcm must be integer numbers');
        }
        return (Math.abs(a) / gcd(a, b)) * Math.abs(b);
    }
};

var gcd = function (a, b)
{
    if(isNumber(a) && isNumber(b))
    {
        if(!isInteger(a) || !isInteger(b))
        {
            throw new Error('Parameters in function gcd must be integer numbers');
        }

        //Eucledian algorithm 
        //https://www.youtube.com/watch?v=JUzYl1TYMcU
        while (b!=0)
        {
            r = a % b;
            a = b;
            b = r;
        }
        return (a < 0) ? -a: a;
    }
};

var isNumber = function(value)
{
    return (value instanceof Number) || (typeof value == 'number');
};

var isInteger = function(value)
{
    return (value == Math.round(value));
};

var smallestMultiple = function (endOfRange)
{
    if (isNumber(endOfRange))
    {
        if(endOfRange <= 0)
        {
            throw new Error('Parameter in functino smallestMultiple must be greater than zero');
        }
        if(!isInteger(endOfRange))
        {
            throw new Error('Parameter in function smallestMultiple must be a positive integer');
        }

        //Observing that lcm(a,b,c) = lcm(lcm(a,b),c)
        var a = 1;
        for(var i = 1; i <= endOfRange; i++)
        {
            a = lcm(a,i);
        }
        return a;
    }
};