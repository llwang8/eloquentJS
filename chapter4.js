/* ===========================
The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a
range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing
all the numbers from start up to (and including) end.


Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates
the “step” value used to build up the array. If no step is given, the array elements go up by
increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should
return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/

function range(start, end, step){
    var result = [];
    if (!step){
        step = 1;
    }
    if (start > end && step < 0) {
        for (var i = start; i >= end; i += step ){   //!!!
            result.push(i);
        }
    }else if(start <=end && step >0){
        for (var i = start; i <= end; i += step){
            result.push(i);
        }
    }else {
        return "invalid input";
    }

    return result;  //!!!
}

console.log(range(5, 2, -1));

function sum(arr){
    if (Object.prototype.toString.call(arr) !== "[object Array]"){  ////!!!
        return "error input";
    }
    return arr.reduce(function(sum, item){
        return sum + item;
    }, 0);
}


console.log(sum(range(1, 10)));


/* ===========================
Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the same elements in the
inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the
array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which
variant do you expect to be useful in more situations? Which one is more efficient?
*/



/* ===========================
A list
Write a function arrayToList that builds up a data structure like the previous one when given
[1, 2, 3] as argument, and write a listToArray function that produces an array from a list.
Also write the helper functions prepend, which takes an element and a list and creates a new list
that adds the element to the front of the input list, and nth, which takes a list and a number and
returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/




/* ===========================
Deep comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the
values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same
value or are objects with the same properties whose values are also equal when compared with a
recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by
looking at their properties, you can use the typeof operator. If it produces "object" for both
values, you should do a deep comparison. But you have to take one silly exception into account:
by a historical accident, typeof null also produces "object".
*/